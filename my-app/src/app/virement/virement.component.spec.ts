/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VirementComponent } from './virement.component';

describe('VirementComponent', () => {
  let component: VirementComponent;
  let fixture: ComponentFixture<VirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
