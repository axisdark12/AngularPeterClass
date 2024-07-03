import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { PokemonService } from "../../services/pokemon.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-pokemones-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent {
    //@Input() public Pokemones: Pokemon[] = [];
    @Output() public DeletePokemon: EventEmitter<number> = new EventEmitter();
    public pokemonNombres: string[] = ['Pikachu', 'Charmander'];
    public PokemonEliminado?: string;
    constructor(private Service: PokemonService, private router: Router) { }
    get Pokemones(): Pokemon[] {
        return [...this.Service.PokemonesLista];
    }
    eliminarUltimoPokemon() {
        this.PokemonEliminado = this.pokemonNombres.pop();
    }

    eliminar(index: number) {
        //this.DeletePokemon.emit(index);
        this.Service.eliminarPokemon(index);
    }

    editar(pokemon: Pokemon) {
        this.Service.setPokemon(pokemon);
        //this.router.navigateByUrl('pokemones/crear');
        this.router.navigate(['pokemones/crear', { id: pokemon.id }]);
    }
}