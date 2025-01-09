import {
  Component,
  computed,
  effect,
  Injector,
  linkedSignal,
  signal,
  OnInit,
} from '@angular/core';
import { GlobalModule } from '../global/global.module';

@Component({
  selector: 'app-dependant-linked-signal',
  imports: [GlobalModule],
  templateUrl: './dependant-linked-signal.component.html',
  styleUrl: './dependant-linked-signal.component.css',
})
export class DependantLinkedSignalComponent implements OnInit {
  constructor(private injector: Injector) {}
  protected readonly otherOptions = ['Email', 'Will Call', 'Postal service'];
  activeUser = signal([
    { id: 123, name: 'Morgan' },
    { id: 12, name: 'Arya' },
  ]);
  shippingOptions = signal(['Ground', 'Air', 'Sea']);
  activeIndex = signal(0);
  selectedOption = computed(() => this.shippingOptions()[this.activeIndex()]);
  // dependent linked signal
  linkedOptionPrevLast = linkedSignal<
    { id: number; name: string }[],
    { id: number; name: string; email: string }[]
  >({
    source: this.activeUser,
    computation: (newOptions, previous) => {
      return newOptions.map((el) => {
        return { ...el, email: `${el.name}@email.com` };
      });
    },
  });
  ngOnInit(): void {
    this.logging();
  }

  logging() {
    effect(
      () => {
        console.log(this.linkedOptionPrevLast());
      },
      {
        injector: this.injector,
      }
    );
  }

  setIndex(index: number) {
    this.activeIndex.set(index);
  }
  setOtherActive() {
    this.shippingOptions.set(this.otherOptions);
  }
}
