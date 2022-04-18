import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { CreatePersonaDTO, Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private personas: PersonasService) { }

  ngOnInit(): void {
    this.personas.getAllPersonas()
    .subscribe(data => {
      this.persona = data;
      console.log(this.persona);
    });
  }

  personasService = PersonasService;

  createNewPerson(){
    const persona: CreatePersonaDTO = {
      nombre: '',
      apellido: '',
      categoriaId: 0,
      correo: '',
      sobre_mi: '',
    };

    this.personasService.crear(persona)
    .subscribe((data: any) => {
      console.log('created', data);
    });
  }

}
