import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudValidarComponent } from './solicitud-validar.component';

describe('SolicitudValidarComponent', () => {
  let component: SolicitudValidarComponent;
  let fixture: ComponentFixture<SolicitudValidarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudValidarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudValidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
