import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {

  @Input() faces: number = 0; // Nombre de faces par défaut
  numberOfDice: number = 0; // Nombre de dés par défaut
  @Output() numberOfDiceChoose: EventEmitter<number> = new EventEmitter<number>();
  
  decrement() {
    if (this.numberOfDice > 0) {
      this.numberOfDice--;
    }
    this.calculateTotal();
  }

  increment() {
    this.numberOfDice++;
    this.calculateTotal();
  }

  calculateTotal() {
    this.numberOfDiceChoose.emit(this.numberOfDice); // Émission de l'événement avec le résultat total
  }
}