import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayTileComponent } from './weather-day-tile.component';

describe('WeatherDayTileComponent', () => {
  let component: WeatherDayTileComponent;
  let fixture: ComponentFixture<WeatherDayTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDayTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
