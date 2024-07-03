import { NgModule } from "@angular/core";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./components/lista/lista.component";
import { PrincipalComponent } from "./pages/principal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewComponent } from './components/view/view.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PokemonesRoutingModule } from "./pokemones-routing.module";
import { FormBasicComponent } from "./components/form-basic/form-basic.component";

@NgModule({
declarations:[
    ListaComponent,
    PokemonComponent,
    PrincipalComponent,
    ViewComponent,
    MenuComponent,
    FormBasicComponent
],
exports: [
    PrincipalComponent
],
imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    PokemonesRoutingModule
]
})
export class PokemonesModule{}