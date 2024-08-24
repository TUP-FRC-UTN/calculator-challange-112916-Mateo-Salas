import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorHijoComponent } from './valor-hijo.component';

describe('ValorHijoComponent', () => {
  let component: ValorHijoComponent;
  let fixture: ComponentFixture<ValorHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
