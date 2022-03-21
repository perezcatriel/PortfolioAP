import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education = {
    platzi: {
      name: 'Platzi',
      type: 'Curso',
      date: 'Comienzo 2022 - actualmente cursando...',
      icon: '../../../assets/icon/school_black_24dp.svg',
      image: '../../../assets/icon/external-content.duckduckgo.com.jpeg',
    },
    ap: {
      name: 'Argentina Programa',
      type: 'Curso de Progrtamación Fullstack Web',
      date: 'Comienzo noviembre 2021 - actualmente cursando...',
      icon: '../../../assets/icon/school_black_24dp.svg',
      image:
        'https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1643416595/APLogo-20-20.png',
    },
    w3school: {
      name: 'W3School',
      type: 'Cursos',
      date: 'Cursado 2020',
      icon: '../../../assets/icon/school_black_24dp.svg',
      image: '../../../assets/icon/school_black_24dp.svg'
    },
    utn: {
      name: 'Curso de Algoritmo y Lógica',
      type: 'UTN',
      date: 'Cursado noviembre 2019',
      icon: '../../../assets/icon/school_black_24dp.svg',
      image: '../../../assets/icon/icon.png'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
