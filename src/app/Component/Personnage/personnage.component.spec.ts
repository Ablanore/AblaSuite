import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personnage } from './personnage.component';

describe('DeuxiemeComponentComponent', () => {
  let component: Personnage;
  let fixture: ComponentFixture<Personnage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Personnage]
    });
    fixture = TestBed.createComponent(Personnage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
