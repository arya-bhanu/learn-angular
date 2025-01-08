import { Component, signal } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DependantLinkedSignalComponent } from "../dependant-linked-signal/dependant-linked-signal.component";

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [FormComponent, DependantLinkedSignalComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css',
})
export class ProfileUserComponent {
  readonly bios = signal<{ name: string; class: string }[]>([]);
}
