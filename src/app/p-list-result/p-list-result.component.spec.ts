import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PListResultComponent } from './p-list-result.component';

describe('PListResultComponent', () => {
  let component: PListResultComponent;
  let fixture: ComponentFixture<PListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
