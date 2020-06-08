import { Component } from '@angular/core';

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
  luke = {"name":"Luke","isJedi":true,"temple":"Concuscan"}
  leia = {"name":"Leia","isJedi":false}
  han ={"name":"Han Solo","isJedi":false}
}
