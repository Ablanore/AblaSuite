import { Component, Input } from '@angular/core';
import { Competence } from 'src/app/models/personnage.model';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {
  @Input() TBcompetences: Competence[] = [];
}