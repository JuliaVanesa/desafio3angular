import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {



  registroForm = new FormGroup ({
    nombre: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.email),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  });

  nombreControl = this.registroForm.controls['nombre'];
  emailControl = this.registroForm.controls['email'];
  passwordControl = this.registroForm.controls['password'];


  constructor() { }

  ngOnInit(): void {

    //this.registroForm.valueChanges.subscribe(values => console.log('values change', values));
    this.registroForm.controls['nombre'].valueChanges.subscribe(values => console.log('values change', values))
  }

  registrar() {
    console.log(this.registroForm.value);
  }

}
