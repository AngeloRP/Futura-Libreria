import { TestBed, inject } from '@angular/core/testing';

import { OrderColumnService } from './order-column.service';

describe('OrderColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderColumnService]
    });
  });

  it('should ...', inject([OrderColumnService], (service: OrderColumnService) => {
    expect(service).toBeTruthy();
  }));
});
