import { Component } from "@angular/core";

@Component({
    selector:'app-pokemones-pokemon',
    templateUrl:'./pokemon.component.html',
    styleUrls:[
        './pokemon.component.css'
],
})export class PokemonesComponent{
    public nombre:string='Pikachu';
    public hp:number=34;
    getDescripcion():string {
        return`${this.nombre} - ${this.hp}`
    }
    get NombreCapitalizado():string{
        return this.nombre.toUpperCase();

    }
    //cambiar nombre
    cambiarNombre(){
        this.nombre='Charizard'
    }
    //cambiar hp
    cambiarHp(){
        this.hp=50
    }
    //reiniciar
    reiniciarDatos(){
        this.nombre = 'Pikachu'
        this.hp = 34
    }
    
}