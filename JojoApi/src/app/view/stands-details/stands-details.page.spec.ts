import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandsDetailsPage } from './stands-details.page';

describe('StandsDetailsPage', () => {
  let component: StandsDetailsPage;
  let fixture: ComponentFixture<StandsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StandsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
