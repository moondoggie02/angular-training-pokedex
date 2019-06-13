import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PListNavigationComponent } from './p-list-navigation.component';

describe('PListNavigationComponent', () => {
  let component: PListNavigationComponent;
  let fixture: ComponentFixture<PListNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PListNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PListNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
