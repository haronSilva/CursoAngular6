import { Component, OnInit, Input } from '@angular/core';
import{Student} from "./student.model"
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
  /*Existe outra forma de declarar um INPUT informando na propriedade Inputs do decorator component*/
})
export class StudentComponent implements OnInit {
  /*Para fazer passagem de valores sem usar binding, vc poderá usar o decorator input! */
  @Input() student:Student
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log("Student:" + this.student.name)
  }

}
