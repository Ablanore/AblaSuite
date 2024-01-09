import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent {
  private _valCarac: number = 0;
  @Input() nomCarac: string = ''; // nom de la caractéristique attendue  
  @Input()
  set valCarac(value: number) {
    this._valCarac = value;
    this.valeurModif = this.calculModCarac(this._valCarac);
  }

  get valCarac(): number {
    return this._valCarac;
  }  
  valeurModif: number = this.calculModCarac(this.valCarac);
  
  calculModCarac(valCaracRecue: number) {
    return Math.floor((valCaracRecue - 10) / 2);
  }
}