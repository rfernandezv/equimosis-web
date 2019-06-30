import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BruisedatingresultComponent } from './bruisedatingresult.component';

describe('BruisedatingresultComponent', () => {
  let component: BruisedatingresultComponent;
  let fixture: ComponentFixture<BruisedatingresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BruisedatingresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BruisedatingresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
