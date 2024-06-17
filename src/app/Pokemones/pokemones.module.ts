import { NgModule } from "@angular/core";
import { PokemonesComponent } from "./components/Pokemon/pokemon.component";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./components/Lista/lista.component";
import { PrincipalComponent } from "./Pages/principal.component";
@NgModule({
    declarations:[
        ListaComponent,
        PokemonesComponent ,
        PrincipalComponent
    ],
    exports:[
        PrincipalComponent,
    ],
    imports:[
        //para agregar funciones de ng
        CommonModule
    ],
})
export class PokemonesModule{


}