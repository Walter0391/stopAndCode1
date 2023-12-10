import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoAssegniComponent } from './deposito-assegni.component';

describe('DepositoAssegniComponent', () => {
  let component: DepositoAssegniComponent;
  let fixture: ComponentFixture<DepositoAssegniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoAssegniComponent]
    });
    fixture = TestBed.createComponent(DepositoAssegniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
