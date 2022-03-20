import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  person = {
    name: 'Catriel',
    lastname: 'Pérez',
    occupation: 'Fullstack Developer',
    img: '../../../assets/image/profile-picture.jpeg',
  };

  ngOnInit(): void {}
}
