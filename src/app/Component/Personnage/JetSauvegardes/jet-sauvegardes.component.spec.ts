import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetSauvegardesComponent } from './jet-sauvegardes.component';

describe('JetSauvegardesComponent', () => {
  let component: JetSauvegardesComponent;
  let fixture: ComponentFixture<JetSauvegardesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JetSauvegardesComponent]
    });
    fixture = TestBed.createComponent(JetSauvegardesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
