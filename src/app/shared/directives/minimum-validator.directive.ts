import { Directive, Input, OnInit } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[minimumAgeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimumValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimumValidatorDirective implements Validator, OnInit {
  @Input('minimumValue') minimumValue: any;
  constructor() {}
  ngOnInit() {}

  validate(control: FormControl): ValidationErrors | null {
    const age: number = +control.value;

    if (isNaN(age) || age < +this.minimumValue) {
      return { minimo: true, requiredValue: 18 };
    }

    return null;
  }
}
