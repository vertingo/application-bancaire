import { Component, OnInit } from '@angular/core';
import { MouvService } from '../mouv.service';

@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.component.html',
  styleUrls: ['./mouvement.component.css']
})
export class MouvementComponent implements OnInit {

  mouvs: any;

  constructor(private mouvService:MouvService ) { }

  ngOnInit() {
    this.getMouvsList();
  }
  getMouvsList(){
    this.mouvService.getAllMouvs().then((res) => {
      this.mouvs = res;
      console.log(this.mouvs);
    }, (err) => {
      console.log(err);
    });
  }
}
