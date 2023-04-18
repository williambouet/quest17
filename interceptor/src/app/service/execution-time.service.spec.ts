/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExecutionTimeService } from './execution-time.service';

describe('Service: ExecutionTime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecutionTimeService]
    });
  });

  it('should ...', inject([ExecutionTimeService], (service: ExecutionTimeService) => {
    expect(service).toBeTruthy();
  }));
});
