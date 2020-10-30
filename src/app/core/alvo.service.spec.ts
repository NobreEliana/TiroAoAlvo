import { TestBed } from '@angular/core/testing';

import { AlvoService } from './alvo.service';

describe('AlvoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlvoService = TestBed.get(AlvoService);
    expect(service).toBeTruthy();
  });
});
