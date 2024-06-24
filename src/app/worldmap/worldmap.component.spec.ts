import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldmapComponent } from './worldmap.component';

describe('WorldmapComponent', () => {
  let component: WorldmapComponent;
  let fixture: ComponentFixture<WorldmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
