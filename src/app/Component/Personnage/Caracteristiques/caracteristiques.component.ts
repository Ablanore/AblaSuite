import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})
export class CaracteristiquesComponent {
  @Input() TBcaracteristiques: { nomCarac: string, valCarac: number }[] = [];
}