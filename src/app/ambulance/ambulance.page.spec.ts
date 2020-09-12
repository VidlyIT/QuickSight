import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancePage } from './ambulance.page';

describe('AmbulancePage', () => {
  let component: AmbulancePage;
  let fixture: ComponentFixture<AmbulancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
