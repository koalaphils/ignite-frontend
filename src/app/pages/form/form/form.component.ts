import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errors: string[] = ['Error 1'];
  control: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl('');
  }

  get value(): string {
    return this.control.value;
  }

}
