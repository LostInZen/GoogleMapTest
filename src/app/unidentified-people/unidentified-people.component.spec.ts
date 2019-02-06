import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidentifiedPeopleComponent } from './unidentified-people.component';

describe('UnidentifiedPeopleComponent', () => {
  let component: UnidentifiedPeopleComponent;
  let fixture: ComponentFixture<UnidentifiedPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidentifiedPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidentifiedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
