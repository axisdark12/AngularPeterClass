import { Component } from "@angular/core";

@Component({
    selector:'app-pokemones-view',
    templateUrl:'./view.component.html',
    styleUrls: ['./view.component.css']
})

export class ViewComponent{

    pokemonData = {
        base_stat: 45,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png&quot",
        name: "squirtle",
        stats: [34, 45, 21],
        type: 'Water'
    };
    

}