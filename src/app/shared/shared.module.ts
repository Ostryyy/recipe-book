import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { loadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    PlaceholderDirective,
    loadingSpinnerComponent,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    loadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
