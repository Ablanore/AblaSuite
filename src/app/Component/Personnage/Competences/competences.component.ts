import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {
  @Input() TBcompetences: { nomComp: string, nomCarac: string, valComp: number }[] = [];
}