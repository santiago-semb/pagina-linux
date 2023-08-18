import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComandoComponent } from './crear-comando.component';

describe('CrearComandoComponent', () => {
  let component: CrearComandoComponent;
  let fixture: ComponentFixture<CrearComandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearComandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearComandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
