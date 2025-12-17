import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficetodoListComponent } from './officetodo-list.component';

describe('OfficetodoListComponent', () => {
  let component: OfficetodoListComponent;
  let fixture: ComponentFixture<OfficetodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficetodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficetodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
