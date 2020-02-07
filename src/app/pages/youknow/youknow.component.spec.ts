import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouknowComponent } from './youknow.component';

describe('YouknowComponent', () => {
  let component: YouknowComponent;
  let fixture: ComponentFixture<YouknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
