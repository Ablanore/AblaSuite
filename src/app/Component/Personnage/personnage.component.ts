import { Component } from '@angular/core';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class Personnage {
  // Dans le composant Personnage, créer un tableau d'objets Caracteristique
  tableauDeCaracteristiques: iCaracteristique[] = [
  { nomCarac: 'Force', valCarac: 7 },
  { nomCarac: 'Dextérité', valCarac: 18 },
  { nomCarac: 'Constitution', valCarac: 12 },
  { nomCarac: 'Intelligence', valCarac: 17 },
  { nomCarac: 'Sagesse', valCarac: 19 },
  { nomCarac: 'Charisme', valCarac: 18 }
];
// Dans le composant Personnage, créer un tableau d'objets Jet de Sauvegarde
tableauDeJetSauvegarde: iJetSauvegarde[] = [
  { nomJS: 'Force', valJS: 4 },
  { nomJS: 'Dextérité', valJS: 3 },
  { nomJS: 'Constitution', valJS: 2 },
  { nomJS: 'Intelligence', valJS: 7 },
  { nomJS: 'Sagesse', valJS: 9 },
  { nomJS: 'Charisme', valJS: 8 }
];
// Dans le composant Personnage, créer un tableau d'objets Compétences
tableauDeCompetences: iCompetence[] = [
  { nomComp: 'Acrobaties', nomCarac: 'Dex', valComp: 4 },
  { nomComp: 'Dressage', nomCarac:'Sag', valComp: 4 },
  { nomComp: 'Arcanes', nomCarac: 'Int', valComp: 4 },
  { nomComp: 'Athlétisme', nomCarac: 'For', valComp: 4 },
  { nomComp: 'Tromperie', nomCarac: 'Cha', valComp: 4 },
  { nomComp: 'Histoire', nomCarac: 'Int', valComp: 4 },
  { nomComp: 'Intimidation', nomCarac: 'Cha', valComp: 4 },
  { nomComp: 'Intuition', nomCarac: 'Sag', valComp: 4 },
  { nomComp: 'Investigation', nomCarac: 'Int', valComp: 4 },
  { nomComp: 'Médecine', nomCarac: 'Sag', valComp: 4 },
  { nomComp: 'Nature', nomCarac: 'Int', valComp: 4 },
  { nomComp: 'Perception', nomCarac: 'Sag', valComp: 4 },
  { nomComp: 'Persuasion', nomCarac: 'Cha', valComp: 4 },
  { nomComp: 'Religion', nomCarac: 'Int', valComp: 4 },
  { nomComp: 'Représentation', nomCarac: 'Cha', valComp: 4 },
  { nomComp: 'Escamotage', nomCarac: 'Dex', valComp: 4 },
  { nomComp: 'Discrétion', nomCarac: 'Dex', valComp: 4 },
  { nomComp: 'Survie', nomCarac: 'Sag', valComp: 4 }
  ];  
}
// Modèle d'objet pour les caractéristiques
export interface iCaracteristique {
  nomCarac: string;
  valCarac: number;
}
// Modèle d'objet pour les jets de sauvegarde
export interface iJetSauvegarde {
  nomJS: string;
  valJS: number;
}
// Modèle d'objet pour les compétences
export interface iCompetence {
  nomComp: string;
  nomCarac: string;
  valComp: number;
}