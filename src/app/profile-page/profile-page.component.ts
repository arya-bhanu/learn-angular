import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CalculatorService } from '../app.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  standalone: true,
})
export class ProfilePage implements OnInit {
  name = signal('');
  greet = computed(() => `Hello, ${this.name()}`);
  listName = signal(['']);
  isAdmin = signal(false);
  val = signal(0);
  private calc = inject(CalculatorService);

  constructor() {}
  changeName(newVal: string) {
    this.name.set(newVal);
  }

  addList(newVal: string) {
    this.listName.update((prev) => prev.concat(newVal));
  }

  increment() {
    this.val.update((prev) => this.calc.add(prev, 1));
  }

  changeIsAdmin() {
    this.isAdmin.update((prev) => !prev);
  }

  ngOnInit() {}
}
