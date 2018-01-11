import { TestBed, inject } from '@angular/core/testing';

import { SolicitudValidarService } from './solicitud-validar.service';

describe('SolicitudValidarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudValidarService]
    });
  });

  it('should be created', inject([SolicitudValidarService], (service: SolicitudValidarService) => {
    expect(service).toBeTruthy();
  }));
});
