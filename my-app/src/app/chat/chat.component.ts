import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { LoginService } from '../services/login.service';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  isChatOpen: Boolean;
  chats: any;
  joinned: Boolean = false;
  newUser = { nickname: '', room: '' };
  msgData = { room: '', nickname: '', message: '' };
  currentUser: String;
  currentRoom: String;
  socket = io('http://localhost:3001');

  constructor(public chatService: ChatService, public loginService: LoginService) {
    this.isChatOpen = false;
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
      this.getChatByRoom(user.room);
      this.currentUser = user.nickname;
      this.currentRoom = user.room;
      this.msgData = { room: user.room, nickname: user.nickname, message: '' };
      this.joinned = true;
      this.scrollToBottom();
    }

    this.socket.on('new-message', function (data) {
      user = localStorage.getItem('user');

      if (user && data.message.room === JSON.parse(user).room) {
        if (!this.chats) {
          this.chats = [];
        }

        this.chats.push(data.message);
        this.msgData = { room: user.room, nickname: user.nickname, message: '' };
        this.scrollToBottom();
      }
    }.bind(this));
  }

  getChatClass(): string {
    return this.isChatOpen ? 'content is-open' : 'content';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).then((res) => {
      this.chats = res;
    }, (err) => {
      console.log(err);
    });
  }

  joinRoom() {
    this.currentUser = this.newUser.nickname;
    this.currentRoom = this.newUser.room;
    const date = new Date();

    localStorage.setItem('user', JSON.stringify(this.newUser));
    this.getChatByRoom(this.newUser.room);
    this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
    this.joinned = true;
    this.socket.emit('save-message',
                      {
                        room: this.newUser.room,
                        nickname: this.newUser.nickname,
                        message: 'A rejoint le salon.',
                        updated_at: date
                      });
  }

  sendMessage() {
    const user = JSON.parse(localStorage.getItem('user'));

    this.msgData.room = user.room;
    this.msgData.nickname = user.nickname;

    this.chatService.saveChat(this.msgData).then((result) => {
      this.socket.emit('save-message', result);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    const date = new Date();
    const user = JSON.parse(localStorage.getItem('user'));
    this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'A quitté le salon', updated_at: date });
    localStorage.removeItem('user');
    this.joinned = false;
  }

}