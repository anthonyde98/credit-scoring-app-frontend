import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  clienteNombre: string = "";

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage['cliente'] === undefined)
      this.router.navigateByUrl("/inicio");
    else if(sessionStorage['cliente'] != "unset"){
      this.clienteService.setCliente(JSON.parse(sessionStorage.getItem('cliente') || '{}'));
      sessionStorage.removeItem('cliente');
    }
    this.getClienteNombre();   
  }

  getClienteNombre(){
<<<<<<< HEAD
=======

>>>>>>> f20145d4c5b6e5a6a190d192102e30fb523e6579
    if(sessionStorage['clienteNombre'] == "unset"){
      let nombre = this.clienteService.getClientePerfil().FirstName + " ";
      let segundoNombre = this.clienteService.getClientePerfil().MiddleName == null ?  null 
      : this.clienteService.getClientePerfil().MiddleName + " ";
      let apellidos = this.clienteService.getClientePerfil().LastName;
      
      this.clienteNombre = nombre + segundoNombre + apellidos; 
    }
    else{
      this.clienteNombre = sessionStorage.getItem('clienteNombre') || " ";

      sessionStorage.removeItem('clienteNombre');
    }
  }

  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any){

    sessionStorage.setItem("clienteNombre", this.clienteNombre);
    sessionStorage.setItem('cliente', JSON.stringify(this.clienteService.detalle));
  }
}
