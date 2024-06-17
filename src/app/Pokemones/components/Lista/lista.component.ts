import { Component } from "@angular/core";

@Component({
    selector:'app-pokemones-lista',
    templateUrl:'./lista.component.html',


})export class ListaComponent{
    public pokemonNombres:string[] =['Pikachu','Charmander','Squirtle','Bulbasaur']
    public pokemonNombres2:string[] =['Raichu','Charmeleon','Wartortle','Ivesaur']
    public pokemonEliminado?:string;

    eliminarUltimoPokemon(){
       this.pokemonEliminado= this.pokemonNombres.pop();
       console.log(this.pokemonEliminado);
    }
    eliminarSeleccionado(poke:string){
        const indexPokemon = this.pokemonNombres.findIndex((pokemon)=> pokemon === poke);
        this.pokemonEliminado = this.pokemonNombres.splice(indexPokemon, 1)[0];
    }
    agregarPokemon(){
        const poke:any = this.pokemonNombres2.pop();
        this.pokemonNombres.push(poke);
    }


}