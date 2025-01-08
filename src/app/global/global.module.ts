import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  exports: [CommonModule, ReactiveFormsModule, NgClass],
})
export class GlobalModule {}
