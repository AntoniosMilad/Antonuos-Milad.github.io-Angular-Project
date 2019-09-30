import { TestBed } from '@angular/core/testing';

import { ProductFromAPIService } from './product-from-api.service';

describe('ProductFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFromAPIService = TestBed.get(ProductFromAPIService);
    expect(service).toBeTruthy();
  });
});
