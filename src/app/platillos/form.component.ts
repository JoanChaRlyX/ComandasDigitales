import { Component, OnInit } from '@angular/core';
import { Platillo } from './platillo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  public platillo: Platillo = new Platillo()
  public titulo: string = "Crear Platillo"
  constructor() {}

  ngOnInit(){}

  public create(): void {
    console.log("Clicked!");
    console.log(this.platillo);
  }
}
