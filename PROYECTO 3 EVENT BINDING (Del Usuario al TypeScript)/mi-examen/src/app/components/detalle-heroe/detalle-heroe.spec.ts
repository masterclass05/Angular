import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeroe } from './detalle-heroe';

describe('DetalleHeroe', () => {
  let component: DetalleHeroe;
  let fixture: ComponentFixture<DetalleHeroe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleHeroe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHeroe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
