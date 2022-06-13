import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalInfoComponent } from './withdrawal-info.component';

describe('WithdrawalInfoComponent', () => {
  let component: WithdrawalInfoComponent;
  let fixture: ComponentFixture<WithdrawalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
