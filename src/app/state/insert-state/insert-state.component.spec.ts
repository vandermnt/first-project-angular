import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStateComponent } from './insert-state.component';

describe('InsertStateComponent', () => {
  let component: InsertStateComponent;
  let fixture: ComponentFixture<InsertStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
