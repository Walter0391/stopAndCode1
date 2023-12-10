import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoDenaroComponent } from './deposito-denaro.component';

describe('DepositoDenaroComponent', () => {
  let component: DepositoDenaroComponent;
  let fixture: ComponentFixture<DepositoDenaroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoDenaroComponent]
    });
    fixture = TestBed.createComponent(DepositoDenaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
