import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  //Sera chamados pelas diretivas quando queremos passar um valor a elas
  writeValue(obj: any): void {
    this.value = obj
  }

  //Chamada sempre que o valor interno do componente mudar
  registerOnChange(fn: any): void {
    this.onChange = fn
    this.onChange(this.value)
  }

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  @Input() options: RadioOption[]

  value: any

  onChange: any
  
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }
}
