import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficetodoFormComponent } from './officetodo-form.component';

describe('OfficetodoFormComponent', () => {
  let component: OfficetodoFormComponent;
  let fixture: ComponentFixture<OfficetodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficetodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficetodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
