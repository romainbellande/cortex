import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTemperaturesComponent } from './weather-temperatures.component';

describe('WeatherTemperaturesComponent', () => {
  let component: WeatherTemperaturesComponent;
  let fixture: ComponentFixture<WeatherTemperaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTemperaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
