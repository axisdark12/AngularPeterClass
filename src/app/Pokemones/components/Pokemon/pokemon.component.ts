import { Component, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { pokemonService } from "../../services/pokemon.services";

@Component({
  selector: 'app-pokemones-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {

  public pokemon: Pokemon ={
    nombre: '',
    hp: 0,
    id: ''
  };

  @Output() NewPokemon: EventEmitter<Pokemon> = new EventEmitter();

  public nombre: string = 'Pikachu';
  public hp: number = 34;

  constructor(private Service:pokemonService){
    this.Service.pokemonDetail.subscribe((pokemon:Pokemon)=>{
      this.pokemon = pokemon;
    });
  }

  getDescription(): string {
    return `${this.nombre} - ${this.hp}`;
  }



  get nombreCapitalizado(): string {
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
    if (this.pokemon.nombre.length === 0)return;
    //this.Service.escucharPokemon(this.pokemon)
    this.NewPokemon.emit(this.pokemon);
    this.pokemon = {nombre: '', hp: 0, id: ''};
  }

  modificarPokemon(){
    this.Service.editarPokemon(this.pokemon);
    this.pokemon = {nombre: '', hp: 0, id: ''};
  }
}

