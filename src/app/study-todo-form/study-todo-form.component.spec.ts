import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTodoFormComponent } from './study-todo-form.component';

describe('StudyTodoFormComponent', () => {
  let component: StudyTodoFormComponent;
  let fixture: ComponentFixture<StudyTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
