import { Component, signal } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css',
})
export class ProfileUserComponent {
  readonly bios = signal<{ name: string; class: string }[]>([]);
}
