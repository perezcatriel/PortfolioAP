import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  password = 'catriel1';
  email = 'perezcatriel@gmail.com';
  btnDisabled = 'true';

  ngOnInit(): void {}

  saludo(password: any, email: any): void {
    alert(`password: ${password} \n email: ${email}`);
  }
}
