import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numeric]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericDirective,
      multi: true,
    },
  ],
})
export class NumericDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;

  constructor(private elementRef: ElementRef) {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('keyup!', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;

    value = value.replace(/[\D]/g, '');

    $event.target.value = value;

    this.onChange(value);
  }
}
