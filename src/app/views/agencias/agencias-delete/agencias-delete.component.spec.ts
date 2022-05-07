import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasDeleteComponent } from './agencias-delete.component';

describe('AgenciasDeleteComponent', () => {
  let component: AgenciasDeleteComponent;
  let fixture: ComponentFixture<AgenciasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
