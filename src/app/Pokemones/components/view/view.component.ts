import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  public Pokemon = {
    base_stat: 45,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png&quot;",
    name: "bulbasaur",
    stats: [34, 45, 21],
    type: 'grass'
  }
  constructor(private service: HttpService) {
    this.ObtenerPokemon();
  }

  ObtenerPokemon() {
    this.service.Service_Get('pokemon', 'bulbasaur').subscribe((data: any) => {
      console.log(data);
      this.Pokemon = { name: data.name,
         base_stat: data.stats[0].base_stat,
         front_default: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name, stats: [34, 45, 21] }
    }, error => {
      console.error(error);
    });
  }
}
