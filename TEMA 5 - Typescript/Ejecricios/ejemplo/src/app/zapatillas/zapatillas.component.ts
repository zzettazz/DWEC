import { Component } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})
export class ZapatillasComponent {

    public titulo:string;
    public listado:string;
    public zapatillas:Array<Zapatilla>;
    public marcas:Array<String>;

    constructor()
    {
        this.titulo="Marcas de zapatillas";
        this.listado="Yuju! Zapatillas";
        this.zapatillas = [
            new Zapatilla("Air Force One","Nike","Negro",150,true),
            new Zapatilla("MD Runner 2","Nike","Azul Marino",70,true),
            new Zapatilla("Palahuer","Adidas","Rojo",20,true)
        ];
        this.marcas = this.zapatillas.map(zapatilla => zapatilla.marca);
    }


}