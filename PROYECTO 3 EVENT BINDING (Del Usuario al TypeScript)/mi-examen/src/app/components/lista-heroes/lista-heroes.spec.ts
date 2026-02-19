import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeroes } from './lista-heroes';

describe('ListaHeroes', () => {
  let component: ListaHeroes;
  let fixture: ComponentFixture<ListaHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHeroes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHeroes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
