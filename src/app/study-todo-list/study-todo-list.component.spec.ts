import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTodoListComponent } from './study-todo-list.component';

describe('StudyTodoListComponent', () => {
  let component: StudyTodoListComponent;
  let fixture: ComponentFixture<StudyTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
