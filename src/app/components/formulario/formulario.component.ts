import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private personas: PersonasService) { }

  ngOnInit(): void {
    this.personas.getPersonas()
    .subscribe(data => {
      this.persona = data;
      console.log(this.persona);
    });
  }

}
