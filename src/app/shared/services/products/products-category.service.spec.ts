import { TestBed } from '@angular/core/testing';

import { ProductsCategoryService } from './products-category.service';

describe('ProductsCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsCategoryService = TestBed.get(ProductsCategoryService);
    expect(service).toBeTruthy();
  });
});
