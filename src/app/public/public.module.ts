import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [LoginComponent, RegisterComponent],
})
export class PublicModule {}
