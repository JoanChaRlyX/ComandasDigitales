import { Component, OnInit } from '@angular/core';
import { Platillo } from './platillo';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html'
})
export class PlatillosComponent implements OnInit{
  platillos: Platillo[] = [
    {id:1, nombre:"Pastor", precio:18},
    {id:2, nombre:"Pastor c/queso", precio:25},
    {id:3, nombre:"Sirloin", precio:25},
    {id:4, nombre:"Sirloin c/queso", precio:32},
    {id:5, nombre:"Pollo", precio:25},
    {id:6, nombre:"Gringa de Pastor", precio:55},
    {id:7, nombre:"Gringa de Sirloin", precio:60},
    {id:8, nombre:"Volcan de Pastor", precio:40}
  ];

  ngOnInit(){}
}
