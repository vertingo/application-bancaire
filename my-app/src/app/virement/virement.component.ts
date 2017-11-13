import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  back(){
    
          this.router.navigate(['/home']);
     
    }
}
