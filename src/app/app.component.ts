import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';
import { HttpClient } from '@angular/common/http';
import { Persona } from './models/persona';
import { CreatePersonaDTO } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAP';

}
