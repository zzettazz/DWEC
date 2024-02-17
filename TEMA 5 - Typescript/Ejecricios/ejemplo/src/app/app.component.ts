import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = Configuracion.titulo;
  descripcion:string = Configuracion.descripcion;

  public mostrarVideojuegos:boolean = true;

  ocultarVideojuegos(valor:boolean)
  {
    this.mostrarVideojuegos = valor;
  }

  public config:any = Configuracion;

}
