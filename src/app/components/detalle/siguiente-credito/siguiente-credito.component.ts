import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siguiente-credito',
  templateUrl: './siguiente-credito.component.html',
  styleUrls: ['./siguiente-credito.component.css']
})
export class SiguienteCreditoComponent implements OnInit {
  servicio = "home";
  cantidad = 200000;
  constructor() { }

  ngOnInit(): void {
  }

}
