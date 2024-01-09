import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetSauvegardeComponent } from './jet-sauvegarde.component';

describe('JetSauvegardeComponent', () => {
  let component: JetSauvegardeComponent;
  let fixture: ComponentFixture<JetSauvegardeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JetSauvegardeComponent]
    });
    fixture = TestBed.createComponent(JetSauvegardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
