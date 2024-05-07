import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  mensaje: string = 'En este página veremos dos componentes que son el contador y una lista de imágenes';

  constructor() { }

  ngOnInit(): void {
  }
}
