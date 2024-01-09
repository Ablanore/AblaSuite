import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    //mettre le truc qui ferme    
  }
  menuItems: MenuItem[] = [
    { label: 'Accueil', link: '/' },
    { label: 'Lancer les dés', link: '/dices' },
    { label: 'Personnage', link: '/personnage' },
    { label: 'Votre profil', link: '/gestion-profile' }
    // Tu peux ajouter d'autres éléments du menu ici si nécessaire
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}
}