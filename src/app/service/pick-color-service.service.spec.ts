import { TestBed } from '@angular/core/testing';

import { PickColorServiceService } from './pick-color-service.service';

describe('PickColorServiceService', () => {
  let service: PickColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
