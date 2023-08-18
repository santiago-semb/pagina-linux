import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTagComponent } from './crear-tag.component';

describe('CrearTagComponent', () => {
  let component: CrearTagComponent;
  let fixture: ComponentFixture<CrearTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
