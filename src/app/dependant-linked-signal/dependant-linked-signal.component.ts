import { Component, computed, effect, signal } from '@angular/core';
import { GlobalModule } from '../global/global.module';

@Component({
  selector: 'app-dependant-linked-signal',
  standalone: true,
  imports: [GlobalModule],
  templateUrl: './dependant-linked-signal.component.html',
  styleUrl: './dependant-linked-signal.component.css',
})
export class DependantLinkedSignalComponent {
  protected readonly otherOptions = ['Email', 'Will Call', 'Postal service'];
  shippingOptions = signal(['Ground', 'Air', 'Sea']);
  activeIndex = signal(0);
  selectedOption = computed(() => this.shippingOptions()[this.activeIndex()]);
  logging() {
    effect(() => {
      console.log(this.selectedOption());
    });
  }
  setIndex(index: number) {
    this.activeIndex.set(index);
  }
  setOtherActive() {
    this.shippingOptions.set(this.otherOptions);
  }
}
