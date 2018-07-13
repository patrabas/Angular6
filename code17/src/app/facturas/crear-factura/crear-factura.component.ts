import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../validators/cif.validator';
import { FacturasService } from '../../servicios/facturas.service';
@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;
  fechaActual=new Date();
  factura:any;
  constructor(private facturasService:FacturasService) { }

  ngOnInit() {
    this.formFactura=new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [Validators.required, CifValidator.checkCIF]),
      fecha: new FormControl(null),
      base: new FormControl(null),
      datosIVA: new FormGroup({
        tipo: new FormControl(0.21),
        iva: new FormControl(null)
      }),      
      total: new FormControl(null)
    });
    this.cambios();
  }
  cambios(){
    this.formFactura.valueChanges.subscribe(data=>{
      console.log(data);
      this.formFactura.get('datosIVA.iva').setValue(data.base*data.datosIVA.tipo, {emitEvent: false});
      this.formFactura.get('total').setValue(this.formFactura.get('base').value+this.formFactura.get('datosIVA.iva').value, {emitEvent: false});
    });
  }
  crearFactura(){
    const factura = {
      razonSocial: this.formFactura.get('cliente').value,
      cif: this.formFactura.get('cif').value,
      fecha: this.formFactura.get('fecha').value,
      base: this.formFactura.get('base').value,
      tipo: this.formFactura.get('datosIVA.tipo').value,
      importeIVA: this.formFactura.get('datosIVA.iva').value,
      total: this.formFactura.get('total').value
    }
    this.facturasService.postFactura(factura).subscribe(
      (respuesta:any)=>{console.log(respuesta)},
      (error)=>{console.log(error)}
    );
  }
}
