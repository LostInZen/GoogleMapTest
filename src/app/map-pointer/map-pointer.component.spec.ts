import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPointerComponent } from './map-pointer.component';

describe('MapPointerComponent', () => {
  let component: MapPointerComponent;
  let fixture: ComponentFixture<MapPointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
