import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dices } from './Component/dices/dices.component';
import { DiceComponent } from './Component/dice/dice.component';
import { PersonnageComponent } from './Component/Personnage/personnage.component';
import { CaracteristiquesComponent } from './Component/Personnage/Caracteristiques/caracteristiques.component';
import { CaracteristiqueComponent } from './Component/Personnage/Caracteristiques/Caracteristique/caracteristique.component';
import { CompetencesComponent } from './Component/Personnage/Competences/competences.component';
import { CompetenceComponent } from './Component/Personnage/Competences/Competence/competence.component';
import { JetSauvegardesComponent } from './Component/Personnage/JetSauvegardes/jet-sauvegardes.component';
import { JetSauvegardeComponent } from './Component/Personnage/JetSauvegardes/JetSauvegarde/jet-sauvegarde.component';

import { MenuComponent } from './Component/menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    Dices,
    PersonnageComponent,
    MenuComponent,
    DiceComponent,
    CaracteristiquesComponent,
    CaracteristiqueComponent,
    CompetencesComponent,
    CompetenceComponent,
    JetSauvegardesComponent,    
    JetSauvegardeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }