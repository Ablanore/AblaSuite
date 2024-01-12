import { Component, Input } from '@angular/core';
import { Caracteristique } from 'src/app/models/personnage.model';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})
export class CaracteristiquesComponent {
  @Input() TBcaracteristiques: Caracteristique[] = [];
}