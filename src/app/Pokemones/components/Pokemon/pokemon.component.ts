import { Pokemon } from './../../interfaces/pokemon.interface';
import { Component, EventEmitter, Output } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-pokemones-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
    public pokemon: Pokemon = {
        nombre: '',
        hp: 0,
        id: ''
    };
    @Output() NewPokemon: EventEmitter<Pokemon> = new EventEmitter();
    public nombre: string = 'Pikachu';
    public hp: number = 34;

    constructor(
        public router: Router,
        private Service: PokemonService,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id') || '';
            if (id != '') {
                const POKEMON = this.Service.searchPokemon(id);
                if (POKEMON?.id) {
                    this.pokemon = POKEMON;
                }
            }
        });
        this.Service.PokemonDetail.subscribe((pokemon: Pokemon) => {
            this.pokemon = pokemon;
        });
    }

    getDescripcion(): string {
        return `${this.nombre} - ${this.hp}`
    }

    get NombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre() {
        this.nombre = 'Charizard';
    }

    cambiarHP() {
        this.hp = 50;
    }

    reiniciar() {
        this.nombre = 'Pikachu';
        this.hp = 34;
    }

    emisorPokemon() {
        if (this.pokemon.nombre.length === 0) return;
        //this.NewPokemon.emit(this.pokemon);
        this.Service.escucharPokemon(this.pokemon);
        this.pokemon = { nombre: '', hp: 0, id: '' };
    }

    modificarPokemon() {
        this.Service.editarPokemon(this.pokemon);
        this.pokemon = { nombre: '', hp: 0, id: '' };
        this.router.navigate(['pokemones/lista']);
    }
}