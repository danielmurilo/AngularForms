import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

/* Reactive Forms possui estruturas para representar o formulário 
  dentro do TypeScript. */

  //FormControl representa um elemento do seu formulário.
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')

/* FormGroup é uma estrutura do Reactive FormsModule, que
   permite agruparmos form controls. */
  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })

  enviarFormulario(){
    alert('Hi, ' + this.dadosForm.value.nome)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
