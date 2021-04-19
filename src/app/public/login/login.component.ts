import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formParams = {
    email: '',
    password: '',
  };
  isFormValid = false;
  isSubmitted = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  submit() {
    this.isSubmitted = true;
    this.formParams.email === 'admin@admin.com' &&
    this.formParams.password === '123456'
      ? (this.isFormValid = true)
      : (this.isFormValid = false);
    if (this.isFormValid && this.isSubmitted) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
