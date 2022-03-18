import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  register = {
    password: 'catriel',
    email: 'perezcatriel@gmail.com',
  };
  form = document.querySelector('.login');


  ngOnInit(): void {}

  onRegister(): void {


    if (
      this.register.email === 'perezcatriel@gmail.com' &&
      this.register.password === 'catriel1'
    ) {
      alert()
  }}
}
