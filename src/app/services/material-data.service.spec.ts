import { TestBed } from '@angular/core/testing';

import { MaterialDataService } from './material-data.service';

describe('MaterialDataService', () => {
  let service: MaterialDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
