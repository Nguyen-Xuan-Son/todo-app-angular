import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  @Input() placeholder: string;
  @Input() content: string;
  @Output() contentChange = new EventEmitter<string>();

  handleOnchange(): void {
    this.contentChange.emit(this.content);
  }
}
