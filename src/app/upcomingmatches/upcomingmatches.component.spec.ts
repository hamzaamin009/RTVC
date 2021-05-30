import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmatchesComponent } from './upcomingmatches.component';

describe('UpcomingmatchesComponent', () => {
  let component: UpcomingmatchesComponent;
  let fixture: ComponentFixture<UpcomingmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingmatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
