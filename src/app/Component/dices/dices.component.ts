import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class Dices {
  @Output() resultOfDice: EventEmitter<number> = new EventEmitter<number>();  
  bonus: number = 0;
  total: number = 0;

  nbDes4: number = 0;
  nbDes6: number = 0;
  nbDes8: number = 0;
  nbDes10: number = 0;
  nbDes12: number = 0;
  nbDes20: number = 0;

  updateTotal(nbDes: number, nbFace: number) {
    switch (nbFace) {
      case 4:
        this.nbDes4 = nbDes;
        break;
      case 6:
        this.nbDes6 = nbDes;
        break;
      case 8:
        this.nbDes8 = nbDes;
        break;
      case 10:
        this.nbDes10 = nbDes;
        break;
      case 12:
        this.nbDes12 = nbDes;
        break;
      case 20:
        this.nbDes20 = nbDes;
        break;
      case 0:
        this.bonus = nbDes;
        break;
      default:
        console.log("Type de dé non pris en charge");
        break;
    }
  }

  rollDice(): void {
    this.total = this.rollForDice(4, this.nbDes4) + this.rollForDice(6, this.nbDes6) + this.rollForDice(8, this.nbDes8) + this.rollForDice(10, this.nbDes10) + this.rollForDice(12, this.nbDes12) + this.rollForDice(20, this.nbDes20) + this.bonus;
    this.resultOfDice.emit(this.total);
  }
  rollForDice(diceFaces: number, numberOfDice: number): number {
    let result: number = 0;
    for (let i = 0; i < numberOfDice; i++) {
      result += Math.floor(Math.random() * diceFaces) + 1;
    }
    return result;
  }
}