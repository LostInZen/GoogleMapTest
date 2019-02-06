import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidentifiedPersonComponent } from './unidentified-person.component';

describe('UnidentifiedPersonComponent', () => {
  let component: UnidentifiedPersonComponent;
  let fixture: ComponentFixture<UnidentifiedPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidentifiedPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidentifiedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
