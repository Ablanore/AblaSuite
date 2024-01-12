import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  @Input() nomComp: string = ''; // nom de la compétence
  @Input() nomCarac: string = ''; // nom de la carac
  @Input() valComp: number = 0; // valeur de la compétence
  @Input() chk: boolean = false; //chk de la compétence
  
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    /*setTimeout(() => {
      this.chk = false; // Modifier la valeur après une certaine durée pour éviter l'erreur
      this.cdRef.detectChanges(); // Marquer explicitement les changements
    }, 1000); // Changer après 1 seconde pour illustrer le point*/
    console.log('Le composant Competence a été initialisé.' + this.chk);
    // Tu peux ajouter d'autres informations ou variables que tu souhaites surveiller ici
  }
}