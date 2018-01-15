import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidoService } from '../_services/index';
import { Pedido } from 'app/_models';

@Component({
  selector: 'app-solicitud-seguimiento',
  templateUrl: './solicitud-seguimiento.component.html',
  styleUrls: ['./solicitud-seguimiento.component.css']
})
export class SolicitudSeguimientoComponent implements OnInit {
  solicitud: Pedido;
  constructor(
    public pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.pedido_id);
    this.pedidoService.obtenerPedidoPorId(this.route.snapshot.params.pedido_id).subscribe(
      solicitud => {
        this.solicitud = solicitud;
        // this.toastr.info('¡Usuario modificado con exito!.', '¡Exito!');
        //this.router.navigate(['/admin/usuario/listar-todos']);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
