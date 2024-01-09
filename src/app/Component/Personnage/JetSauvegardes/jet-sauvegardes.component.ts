import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jet-sauvegardes',
  templateUrl: './jet-sauvegardes.component.html',
  styleUrls: ['./jet-sauvegardes.component.scss']
})
export class JetSauvegardesComponent {
  @Input() TBjetSauvegarde: { nomJS: string, valJS: number }[] = [];
}