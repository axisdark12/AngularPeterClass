import { Component } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon.interface";
import { v4 as uuid} from 'uuid';
@Component({
    selector:'principal-pokemones',
    templateUrl: './principal.component.html'
})

export class PrincipalComponent{
    public PokemonesLista: Pokemon[] =[];
    public pokemonPrincipal = {
        nombre: 'Pikachu',
        hp: 88
    }

    escucharPokemon(pokemon: Pokemon){
        const newPokemon: Pokemon = { id: uuid() ,...pokemon}
        this.PokemonesLista.push(newPokemon);

    }
    eliminarPokemon(index: number){
        this.PokemonesLista.splice(index,1);
                
    }
}