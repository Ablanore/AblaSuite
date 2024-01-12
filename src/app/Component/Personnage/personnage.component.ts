import { Component } from '@angular/core';
import { Personnage, Caracteristique, Jetsauvegarde, Competence } from 'src/app/models/personnage.model';


@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent {
  monpersonnage : Personnage = new Personnage(tableauDeCaracteristiques, tableauDeJetSauvegarde, tableauDeCompetences);  
}

const tableauDeCaracteristiques = [
  new Caracteristique('Force', 7),
  new Caracteristique('Dextérité', 18),
  new Caracteristique('Constitution', 12),
  new Caracteristique('Intelligence', 17),
  new Caracteristique('Sagesse', 19),
  new Caracteristique('Charisme', 18)
]

const tableauDeJetSauvegarde = [
  new Jetsauvegarde('Force', 4, true),
  new Jetsauvegarde('Dextérité', 3, false),
  new Jetsauvegarde('Constitution', 2, false),
  new Jetsauvegarde('Intelligence', 7, true),
  new Jetsauvegarde('Sagesse', 9, false),
  new Jetsauvegarde('Charisme', 8, true)
];

const tableauDeCompetences = [
  new Competence('Acrobaties', 'Dex', 4, true),
  new Competence('Dressage', 'Sag', 2, false),
  new Competence('Arcanes', 'Int', 8, true),
  new Competence('Athlétisme', 'For', 5, true),
  new Competence('Tromperie', 'Cha', 6, false),
  new Competence('Histoire', 'Int', 4, true),
  new Competence('Intimidation', 'Cha', 1, true),
  new Competence('Intuition', 'Sag', 2, false),
  new Competence('Investigation', 'Int', 4, false),
  new Competence('Médecine', 'Sag', 3, true),
  new Competence('Nature', 'Int', 4, true),
  new Competence('Perception', 'Sag', 9, false),
  new Competence('Persuasion', 'Cha', 6, true),
  new Competence('Religion', 'Int', 4, false),
  new Competence('Représentation', 'Cha', 5, true),
  new Competence('Escamotage', 'Dex', 4, false),
  new Competence('Discrétion', 'Dex', 1, false),
  new Competence('Survie', 'Sag', 4, false)
  ];  