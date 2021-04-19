import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formParams: {
    email: '';
    password: '';
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {this.router.navigateByUrl('/register');}
}
