import { Component, model } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalModule } from '../global/global.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [GlobalModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  bios = model<{ name: string; class: string }[]>();
  name = new FormControl('');
  class = new FormControl('');
  handleSubmitForm() {
    if (this.bios()) {
      this.bios.update((prev) => {
        if (prev) {
          prev.push({
            name: this.name.getRawValue() || '',
            class: this.class.getRawValue() || '',
          });
        }
        return prev;
      });
    }
  }
}
