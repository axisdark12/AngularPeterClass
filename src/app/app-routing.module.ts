import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module').then(m => m.PokemonesModule)
  },
  { path: '**', redirectTo: 'pokemones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
