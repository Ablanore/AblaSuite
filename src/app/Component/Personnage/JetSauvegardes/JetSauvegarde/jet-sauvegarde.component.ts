import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jet-sauvegarde',
  templateUrl: './jet-sauvegarde.component.html',
  styleUrls: ['./jet-sauvegarde.component.scss']
})
export class JetSauvegardeComponent {
  
  @Input() nomJS: string = ''; // nom du jet de sauvegarde
  @Input() valJS: number = 0; //valeur du jet de sauvegarde
  
  calculModCarac(valCaracRecue: number) {
    return Math.floor((valCaracRecue - 10) / 2);
  }
}