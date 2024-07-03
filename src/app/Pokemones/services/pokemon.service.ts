import { EventEmitter, Injectable } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon.interface";
import { v4 as uuid } from 'uuid';
@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    public PokemonDetail: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
    public PokemonesLista: Pokemon[] = [];
    constructor() {
        this.PokemonesLista = [
            { id: uuid(), nombre: 'Charizar', hp: 30 },
             { id: uuid(), nombre: 'Pikachu', hp: 90 }]
    }

    escucharPokemon(pokemon: Pokemon) {
        const newPokemon: Pokemon = { ...pokemon, id: uuid() };
        this.PokemonesLista.push(newPokemon);
    }

    eliminarPokemon(index: number) {
        this.PokemonesLista.splice(index, 1);
    }

    setPokemon(pokemon: Pokemon) {
        const oldPokemon: Pokemon = { ...pokemon };
        this.PokemonDetail.emit(oldPokemon);
    }

    searchPokemon(id: string){
        return this.PokemonesLista.find((p)=> p.id === id);
    }

    editarPokemon(pokemon: Pokemon) {
        const index = this.PokemonesLista.findIndex(((p) => p.id === pokemon.id));
        this.PokemonesLista[index] = pokemon;
    }

}