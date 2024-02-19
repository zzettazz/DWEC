import { Component } from "@angular/core";
import { Zapatilla } from "../models/zapatillas";
@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})
export class zapatillasComponent{
    public titulo:string;
    public listado:string;
    public zapatillas:Array<Zapatilla>;
    public marcas:Array<string>;
    public mi_marca:string;

    constructor()
    {
        this.marcas= new Array;
        this.titulo="Componente de Zapatillas";
        this.listado="Listado de Zapatillas"
        this.mi_marca="Mis marcas";
        
        this.zapatillas= [
            new Zapatilla ("Air Force", "Nike","Blanco", 100, true),
            new Zapatilla ("Samba", "Adidas","Negro", 120, false),
            new Zapatilla ("2002r", "New Balance","Rosas", 150, true)

        ]

        this.marcas = Array.from(new Set(this.zapatillas.map(zapatilla => (zapatilla.marca[0].toUpperCase() + zapatilla.marca.substring(1,zapatilla.marca.length).toLowerCase()))));
    }
    
    getMarcas()
    {
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca)
    }
}