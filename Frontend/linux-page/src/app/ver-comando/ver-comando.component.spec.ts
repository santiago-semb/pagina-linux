import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComandoComponent } from './ver-comando.component';

describe('VerComandoComponent', () => {
  let component: VerComandoComponent;
  let fixture: ComponentFixture<VerComandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerComandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
