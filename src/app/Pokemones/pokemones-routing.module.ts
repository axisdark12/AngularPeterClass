import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ListaComponent } from './components/lista/lista.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormBasicComponent } from './components/form-basic/form-basic.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'lista', component: ListaComponent },
      { path: 'crear', component: PokemonComponent },
      { path: 'form-basic', component: FormBasicComponent },
      { path: '**', redirectTo: 'lista' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule { }
