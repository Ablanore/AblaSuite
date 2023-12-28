import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremierComponent } from './Component/premier-component/premier-component.component';
import { DeuxiemeComponent } from './Component/deuxieme-component/deuxieme-component.component';

const routes: Routes = [
  { path: 'premier-component', component: PremierComponent },
  { path: 'deuxieme-component', component: DeuxiemeComponent },
  // Tu peux ajouter d'autres routes si nécessaire
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

