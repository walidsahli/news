import { TestBed } from '@angular/core/testing';

import { DBinterService } from './dbinter.service';

describe('DBinterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBinterService = TestBed.get(DBinterService);
    expect(service).toBeTruthy();
  });
});
