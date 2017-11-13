import { Component, OnInit } from '@angular/core';
import { MouvService } from '../mouv.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-mouvement-edit',
  templateUrl: './mouvement-edit.component.html',
  styleUrls: ['./mouvement-edit.component.css']
})
export class MouvementEditComponent implements OnInit {
  mouv = {};
  
  constructor(private mouvService: MouvService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMouv(this.route.snapshot.params['id']);
    
  }

  getMouv(id) {
    this.mouvService.showMouv(id).then((res) => {
      this.mouv = res;
      console.log(this.mouv);
    }, (err) => {
      console.log(err);
    });
  }

  updateMouv(id) {
    this.mouvService.updateMouv(id, this.mouv).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/mouvement-details', id]);
    }, (err) => {
      console.log(err);
    });

}
}
