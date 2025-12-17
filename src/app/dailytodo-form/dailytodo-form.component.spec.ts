import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytodoFormComponent } from './dailytodo-form.component';

describe('DailytodoFormComponent', () => {
  let component: DailytodoFormComponent;
  let fixture: ComponentFixture<DailytodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailytodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailytodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
