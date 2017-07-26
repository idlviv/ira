import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSideMenuComponent } from './products-side-menu.component';

describe('ProductsSideMenuComponent', () => {
  let component: ProductsSideMenuComponent;
  let fixture: ComponentFixture<ProductsSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
