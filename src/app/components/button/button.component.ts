import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() type: 'info' | 'primary' | 'error' | 'success' | 'warning' | undefined;
  @Input() text: string;
  @Input() disabled: true;

  @Output() emitOnClick = new EventEmitter();

  dispatchOnClick(): void {
    this.emitOnClick.emit();
  }
}
