import { TestBed } from '@angular/core/testing';

import { SimpleHttpConncetionService } from './simple-http-conncetion.service';

describe('SimpleHttpConncetionService', () => {
  let service: SimpleHttpConncetionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleHttpConncetionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
