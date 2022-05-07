import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasUpdateComponent } from './agencias-update.component';

describe('AgenciasUpdateComponent', () => {
  let component: AgenciasUpdateComponent;
  let fixture: ComponentFixture<AgenciasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
