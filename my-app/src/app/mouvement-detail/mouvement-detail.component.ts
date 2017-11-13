import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MouvService } from '../mouv.service';



@Component({
  selector: 'app-mouvement-detail',
  templateUrl: './mouvement-detail.component.html',
  styleUrls: ['./mouvement-detail.component.css']
})
export class MouvementDetailComponent implements OnInit {
  mouv = {};
  constructor(private route: ActivatedRoute, private router: Router, private mouvService: MouvService) { }

  ngOnInit() {
    this.getMouvementDetail(this.route.snapshot.params['id']);
    
  }

  getMouvementDetail(id) {
    this.mouvService.showMouv(id).then((res) => {
      this.mouv = res;
      console.log(this.mouv);
    }, (err) => {
      console.log(err);
    });
  }

  deleteMouvement(id) {
    this.mouvService.deleteMouv(id).then((result) => {
      this.router.navigate(['/mouvements']);
    }, (err) => {
      console.log(err);
    });
  }
}
