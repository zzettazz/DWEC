import { Component, OnInit, OnDestroy, DoCheck } from "@angular/core";
@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})
export class VideojuegoComponent {
    public titulo:string;
    public listado:string;
    constructor()
    {
        this.titulo="Componente de Videojuegos";
        this.listado="Listado de los juegos más populares"
    }
    ngOnInit(): void {
        console.log("Inicializado el componente de videojuegos");
    }
    ngOnDestroy(): void {
        console.log("Ta luego maricarmen");
    }
    ngDoCheck(): void {
        console.log("Se han detectado cambios");
    }
}