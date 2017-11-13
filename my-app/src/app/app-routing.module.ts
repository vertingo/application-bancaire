import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ LoginComponent } from './login/login.component';
import{ RegisterComponent } from './register/register.component';
import{ HomeComponent } from './home/home.component';
import{VirementComponent}from './virement/virement.component';
import{RetraitComponent}from './retrait/retrait.component';
import{MouvementComponent}from './mouvement/mouvement.component';
import{MouvementCreateComponent}from './mouvement-create/mouvement-create.component';
import{MouvementDetailComponent}from './mouvement-detail/mouvement-detail.component';
import{MouvementEditComponent}from './mouvement-edit/mouvement-edit.component';






const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  }
  ,
  { 
    path: 'virement', 
    component: VirementComponent
  }
  ,
  { 
    path: 'retrait', 
    component: RetraitComponent
  }
  ,
  { 
    path: 'mouvements', 
    component: MouvementComponent
  }
  ,
  { 
    path: 'mouvement-create', 
    component: MouvementCreateComponent
  }
,
{ 
  path: 'mouvement-details/:id', 
  component: MouvementDetailComponent
}
,
{ 
  path: 'mouvement-edit/:id', 
  component: MouvementEditComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
