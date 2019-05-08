import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderBoxComponent } from './main-header-box.component';

describe('MainHeaderBoxComponent', () => {
  let component: MainHeaderBoxComponent;
  let fixture: ComponentFixture<MainHeaderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
