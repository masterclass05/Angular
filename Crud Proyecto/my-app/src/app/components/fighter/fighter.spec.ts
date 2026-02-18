import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FighterComponent } from './fighter'; // Importamos la nueva clase
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FighterComponent', () => {
  let component: FighterComponent;
  let fixture: ComponentFixture<FighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Añadimos los imports necesarios para que la prueba no falle por falta de servicios
      imports: [FighterComponent, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});