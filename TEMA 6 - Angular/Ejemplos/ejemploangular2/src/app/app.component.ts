import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'proyectito';
  descripcion:string="";

  public mostrar_videojuego:boolean =true;
  ocultarVideojuego(valor:boolean)
  {
    this.mostrar_videojuego =valor;
  }
  public  config:any;
  constructor()
  {
    this.config=Configuracion;
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;
  }
}

