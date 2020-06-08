import { Component } from '@angular/core';
import{Student} from "./student/student.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'JediAcademy';
  /**
   * Sequencia do uso de parâmetros:
   * 1. Definir um model
   * 2. Habilitar o componente que será usado para ter um input com o objeto anteriormente criado.
   * 3. Criar um objeto no modelo esperado e usar via binding no componente html. 
   */
  students:Student[] = [
    {"name":"Luke","isJedi":true,"temple":"Concuscan"},
    {"name":"Leia","isJedi":true, "temple":"Zé Walter"},
    {"name":"Han Solo","isJedi":false}
  ]
}
