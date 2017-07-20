import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolodkoComponent } from './solodko.component';

describe('SolodkoComponent', () => {
  let component: SolodkoComponent;
  let fixture: ComponentFixture<SolodkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolodkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolodkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
