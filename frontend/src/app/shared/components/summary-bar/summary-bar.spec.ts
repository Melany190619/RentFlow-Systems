import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryBar } from './summary-bar';

describe('SummaryBar', () => {
  let component: SummaryBar;
  let fixture: ComponentFixture<SummaryBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
