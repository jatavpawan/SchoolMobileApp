import { TestBed } from '@angular/core/testing';

import { ShardServiceService } from './shard-service.service';

describe('ShardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShardServiceService = TestBed.get(ShardServiceService);
    expect(service).toBeTruthy();
  });
});
