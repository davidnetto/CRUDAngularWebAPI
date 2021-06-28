import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;

  constructor() { }

  ngOnInit(): void {
this.formulario =new FormGroup({
  nome: new FormControl(null),
  cpf:new FormControl(null),
  sexo: new FormControl(null),
})

  }

}
