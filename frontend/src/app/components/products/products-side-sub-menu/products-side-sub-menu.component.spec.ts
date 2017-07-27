import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSideSubMenuComponent } from './products-side-sub-menu.component';

describe('ProductsSideSubMenuComponent', () => {
  let component: ProductsSideSubMenuComponent;
  let fixture: ComponentFixture<ProductsSideSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSideSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSideSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
