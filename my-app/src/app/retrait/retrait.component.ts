import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    
          this.router.navigate(['/mouvements']);
     
    }
}
