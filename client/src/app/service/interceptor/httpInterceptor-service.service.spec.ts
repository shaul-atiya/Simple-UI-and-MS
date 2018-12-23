import { TestBed } from '@angular/core/testing';

import { HttpinterceptorServiceService } from './httpinterceptor-service.service';

describe('HttpinterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterceptorServiceService = TestBed.get(HttpinterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
