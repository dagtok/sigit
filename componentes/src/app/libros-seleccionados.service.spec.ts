import { TestBed, inject } from '@angular/core/testing';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';

describe('LibrosSeleccionadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosSeleccionadosService]
    });
  });

  it('should be created', inject([LibrosSeleccionadosService], (service: LibrosSeleccionadosService) => {
    expect(service).toBeTruthy();
  }));
});
