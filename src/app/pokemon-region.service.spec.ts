import { TestBed } from '@angular/core/testing';

import { PokemonRegionService } from './pokemon-region.service';

describe('PokemonRegionService', () => {
  let service: PokemonRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
