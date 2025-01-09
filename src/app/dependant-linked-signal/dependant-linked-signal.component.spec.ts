import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantLinkedSignalComponent } from './dependant-linked-signal.component';

describe('DependantLinkedSignalComponent', () => {
  let component: DependantLinkedSignalComponent;
  let fixture: ComponentFixture<DependantLinkedSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependantLinkedSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependantLinkedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
