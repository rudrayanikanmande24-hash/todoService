import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytodoListComponent } from './dailytodo-list.component';

describe('DailytodoListComponent', () => {
  let component: DailytodoListComponent;
  let fixture: ComponentFixture<DailytodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailytodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailytodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
