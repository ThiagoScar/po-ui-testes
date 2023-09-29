import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlurapicComponent } from './alurapic.component';

describe('AlurapicComponent', () => {
  let component: AlurapicComponent;
  let fixture: ComponentFixture<AlurapicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlurapicComponent]
    });
    fixture = TestBed.createComponent(AlurapicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
