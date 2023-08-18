import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionesComponent } from './distribuciones.component';

describe('DistribucionesComponent', () => {
  let component: DistribucionesComponent;
  let fixture: ComponentFixture<DistribucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
