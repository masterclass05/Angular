import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FighterComponent } from './fighter'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FighterComponent', () => {
  let component: FighterComponent;
  let fixture: ComponentFixture<FighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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