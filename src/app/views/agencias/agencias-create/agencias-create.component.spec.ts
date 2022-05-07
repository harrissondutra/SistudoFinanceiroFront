import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasCreateComponent } from './agencias-create.component';

describe('AgenciasCreateComponent', () => {
  let component: AgenciasCreateComponent;
  let fixture: ComponentFixture<AgenciasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
