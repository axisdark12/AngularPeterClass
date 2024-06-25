import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { pokemonService } from "../../services/pokemon.services";

@Component({
    selector: 'app-pokemones-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent {
    //@Input() public Pokemones: Pokemon[] = [];
    @Output() public DeletePokemon: EventEmitter<number> = new EventEmitter();

    public pokemonNombres: string[] = ['Pikachu', 'Charmander'];
    public pokemonEliminado?: string;
    public pokemonNuevosLista: string[] = ['Squirtle', 'Bulbasaur', 'Charizard', 'Greninja', 'Juan'];

    constructor(private Service:pokemonService){}
    get Pokemones(): Pokemon[]{
        return[...this.Service.PokemonesLista];
    }

    //* función eliminar pokemon
    eliminarPokemon(pokemon: string) {
        const index = this.pokemonNombres.indexOf(pokemon);
        if (index > -1) {
            this.pokemonEliminado = this.pokemonNombres.splice(index, 1)[0];
        }
    }
    
    //* función eliminar el último pokemon
    eliminarUltimoPokemon() {
        this.pokemonEliminado = this.pokemonNombres.pop();
    }
    
    //* función agregar pokemon
    agregarPokemon() {
        if (this.pokemonNuevosLista.length > 0) {
            const nuevoPokemon = this.pokemonNuevosLista.shift();
            if (nuevoPokemon) {
                this.pokemonNombres.push(nuevoPokemon);
            }
        }
    }

    eliminar(index: number) {
        //this.DeletePokemon.emit(index);
        this.Service.eliminarPokemon(index)
    }

    editar (pokemon: Pokemon){
        this.Service.setPokemon(pokemon);
        
    }
}
