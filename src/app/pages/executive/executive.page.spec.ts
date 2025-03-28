import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExecutivePage } from './executive.page';

describe('ExecutivePage', () => {
  let component: ExecutivePage;
  let fixture: ComponentFixture<ExecutivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
