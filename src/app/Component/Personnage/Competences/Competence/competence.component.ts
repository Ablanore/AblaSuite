import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  @Input() nomComp: string = ''; // nom de la compétence
  @Input() valComp: number = 0; // valeur de la compétence
    
  calculModCarac(valCaracRecue: number) {
    return Math.floor((valCaracRecue - 10) / 2);
  }
}