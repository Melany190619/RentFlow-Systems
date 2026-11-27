import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaRenta } from './nueva-renta';

describe('NuevaRenta', () => {
  let component: NuevaRenta;
  let fixture: ComponentFixture<NuevaRenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaRenta],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaRenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
