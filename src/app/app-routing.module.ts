import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dices } from './Component/dices/dices.component';
import { PersonnageComponent } from './Component/Personnage/personnage.component';
import { GestionProfileComponent } from './Component/gestion-profile/gestion-profile.component';

const routes: Routes = [
  { path: 'dices', component: Dices },
  { path: 'personnage', component: PersonnageComponent },
  { path: 'gestion-profile', component: GestionProfileComponent },
  // Tu peux ajouter d'autres routes si nécessaire
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

