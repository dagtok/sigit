import { TestBed, inject } from '@angular/core/testing';

import { SubcategoriaService } from './subcategoria.service';

describe('SubcategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcategoriaService]
    });
  });

  it('should be created', inject([SubcategoriaService], (service: SubcategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
