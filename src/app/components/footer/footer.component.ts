import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
contact = {
  email: {
    img: '../../../assets/icon/email-outline.svg',
    name: 'Email',
    myemail: 'mailto:perezcatriel@gmail.com'
  },
  phone: {
    img: '../../../assets/icon/phone.svg',
    name: 'Phone',
    myphone: 'phone:3541638060'
  },
  github: {
    img: '../../../assets/icon/icons8-github.svg',
    name: 'Github',
    mygithub: 'https://github.com/perezcatriel'
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
