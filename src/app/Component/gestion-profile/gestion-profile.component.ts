import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-profile',
  templateUrl: './gestion-profile.component.html',
  styleUrls: ['./gestion-profile.component.scss']
})
export class GestionProfileComponent {

  selectedTheme: string = 'white'; // Thème par défaut

  applyTheme() {
    // Logique pour appliquer le thème sélectionné
    // Par exemple, changer la classe CSS du body en fonction du thème sélectionné
    document.body.className = this.selectedTheme;
  }
}