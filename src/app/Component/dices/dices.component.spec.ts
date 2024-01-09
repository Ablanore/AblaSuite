import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dices } from './dices.component';

describe('Dices', () => {
  let component: Dices;
  let fixture: ComponentFixture<Dices>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dices]
    });
    fixture = TestBed.createComponent(Dices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
