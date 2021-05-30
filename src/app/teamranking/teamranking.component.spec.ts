import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamrankingComponent } from './teamranking.component';

describe('TeamrankingComponent', () => {
  let component: TeamrankingComponent;
  let fixture: ComponentFixture<TeamrankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamrankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
