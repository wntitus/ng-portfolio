import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBoxComponent } from './projects-box.component';

describe('ProjectsBoxComponent', () => {
  let component: ProjectsBoxComponent;
  let fixture: ComponentFixture<ProjectsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
