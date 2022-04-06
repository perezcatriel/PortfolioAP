import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["6765757Seececc34"]
        })
      }
    )
  }

  /* register = {
    password: 'catriel',
    email: 'perezcatriel@gmail.com',
  };
  form = document.querySelector('.login');

  logout = 'block';
  login = 'none';
  email = "perezcatriel@gmail.com";
  password = "catriel1"; */

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

 /*  onRegister(): void {
    if (
      this.register.email === this.email &&
      this.register.password === this.password
    ) {
      this.logout = this.login;
    } else {
      alert('No es un usuario registrado');
    }
  } */
}
