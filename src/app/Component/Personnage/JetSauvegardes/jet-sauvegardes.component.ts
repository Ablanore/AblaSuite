import { Component, Input } from '@angular/core';
import { Jetsauvegarde } from 'src/app/models/personnage.model';

@Component({
  selector: 'app-jet-sauvegardes',
  templateUrl: './jet-sauvegardes.component.html',
  styleUrls: ['./jet-sauvegardes.component.scss']
})
export class JetSauvegardesComponent {
  @Input() TBjetSauvegarde: Jetsauvegarde[] = [];
}