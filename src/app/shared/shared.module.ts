import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MinimumValidatorDirective, NumericDirective } from './directives';
import { MyPipePipe } from './pipes';

@NgModule({
  declarations: [MinimumValidatorDirective, NumericDirective, MyPipePipe],
  exports: [MinimumValidatorDirective, NumericDirective, MyPipePipe],
})
export class SharedModule {}
