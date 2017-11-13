import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { VirementComponent } from './virement/virement.component';
import { RetraitComponent } from './retrait/retrait.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { MouvService } from './mouv.service';
import { MouvementCreateComponent } from './mouvement-create/mouvement-create.component';
import { MouvementDetailComponent } from './mouvement-detail/mouvement-detail.component';
import { MouvementEditComponent } from './mouvement-edit/mouvement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VirementComponent,
    RetraitComponent,
    MouvementComponent,
    MouvementCreateComponent,
    MouvementDetailComponent,
    MouvementEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService,MouvService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
