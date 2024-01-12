import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-jet-sauvegarde',
  templateUrl: './jet-sauvegarde.component.html',
  styleUrls: ['./jet-sauvegarde.component.scss']
})
export class JetSauvegardeComponent {
  
  @Input() nomJS: string = ''; // nom du jet de sauvegarde
  @Input() valJS: number = 0; //valeur du jet de sauvegarde
  @Input() chk: boolean = false; //chk du jet de sauvegarde
  
  constructor(private cdRef: ChangeDetectorRef) {
    //this.chk = false;
  }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.chk = false; // Modifier la valeur après une certaine durée pour éviter l'erreur
      this.cdRef.detectChanges(); // Marquer explicitement les changements
    }, 1000); // Changer après 1 seconde pour illustrer le point*/
    console.log('Le composant Sauvegarde a été initialisé.' + this.chk);
    // Tu peux ajouter d'autres informations ou variables que tu souhaites surveiller ici
  }
}