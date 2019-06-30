import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbruiseComponent } from './registerbruise.component';

describe('RegisterbruiseComponent', () => {
  let component: RegisterbruiseComponent;
  let fixture: ComponentFixture<RegisterbruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
