import { TestBed } from '@angular/core/testing';

import { SmartBuyFormService } from './smart-buy-form.service';

describe('SmartBuyFormService', () => {
  let service: SmartBuyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartBuyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
