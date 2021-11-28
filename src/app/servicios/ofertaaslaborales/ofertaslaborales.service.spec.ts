import { TestBed } from '@angular/core/testing';

import { OfertaslaboralesService } from './ofertaslaborales.service';

describe('OfertaslaboralesService', () => {
  let service: OfertaslaboralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaslaboralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
