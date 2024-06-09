import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightGraphComponent } from './fight-graph.component';

describe('FightGraphComponent', () => {
  let component: FightGraphComponent;
  let fixture: ComponentFixture<FightGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightGraphComponent]
    });
    fixture = TestBed.createComponent(FightGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
