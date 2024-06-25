import { EventEmitter, Injectable } from "@angular/core";
import { v4 as uuid} from 'uuid';
import { Pokemon } from "../interfaces/pokemon.interface";
import { log } from "node:console";


@Injectable({
    providedIn: 'root'
})

export class pokemonService{
    public pokemonDetail: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
    public PokemonesLista: Pokemon[] = [];
    constructor(){
        this.PokemonesLista = [
            {id:uuid(), nombre:"Bulbasaur",hp:27},
            {id:uuid(), nombre:"Ivesaru",hp:34},
            {id:uuid(), nombre:"Venasaur",hp:50},
            {id:uuid(), nombre:"Squirtle",hp:25},
            {id:uuid(), nombre:"Wartortle",hp:30},
            {id:uuid(), nombre:"Blastoise",hp:90},
        ]
    }

    escucharPokemon(pokemon: Pokemon){
        const newPokemon: Pokemon = { ...pokemon, id: uuid()}
        console.log();(newPokemon);
        this.PokemonesLista.push(newPokemon);

    }
    eliminarPokemon(index: number){
        this.PokemonesLista.splice(index,1);
                
    }

    setPokemon(pokemon: Pokemon){
        const oldPokemon: Pokemon = { ...pokemon};
        this.pokemonDetail.emit(oldPokemon);
    }
    editarPokemon(pokemon: Pokemon){
    const index =  this.PokemonesLista.findIndex(((p) => p.id === pokemon.id));
    this.PokemonesLista[index] = pokemon;
    }
}