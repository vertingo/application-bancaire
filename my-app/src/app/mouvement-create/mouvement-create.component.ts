import { Component, OnInit } from '@angular/core';
import { MouvService } from '../mouv.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mouvement-create',
  templateUrl: './mouvement-create.component.html',
  styleUrls: ['./mouvement-create.component.css']
})
export class MouvementCreateComponent implements OnInit {

  mouv = {};
  
  constructor(private mouvService:MouvService, private router: Router) { }

  ngOnInit() {
    
  }
  saveMouv(){
    this.mouvService.saveMouv(this.mouv).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/mouvements']);
    }, (err) => {
      console.log(err);
    });
  }
}
