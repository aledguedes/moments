import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-moments',
  templateUrl: './form-moments.component.html',
  styleUrls: ['./form-moments.component.css']
})
export class FormMomentsComponent implements OnInit {

  formulario!: FormGroup;
  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.form.group({
      nome: [null],
      email: [null]
    });
  }

}
