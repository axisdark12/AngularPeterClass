import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./pokemones/components/lista/lista.component";
import { PokemonComponent } from "./pokemones/components/pokemon/pokemon.component";
import { PrincipalComponent } from "./pokemones/pages/principal.component";
import { ViewComponent } from "./pokemones/components/view/view.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ListaComponent,
        PokemonComponent,
        PrincipalComponent,
        ViewComponent
    ],
    exports: [
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class PokemonesModule { }
