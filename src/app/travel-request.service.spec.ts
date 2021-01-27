import { TestBed, inject } from '@angular/core/testing';

import { TravelRequestService } from './travel-request.service';

describe('TravelRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelRequestService]
    });
  });

  it('should be created', inject([TravelRequestService], (service: TravelRequestService) => {
    expect(service).toBeTruthy();
  }));
});
