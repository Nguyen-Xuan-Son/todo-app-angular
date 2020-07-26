import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bulk-action',
  templateUrl: './bulk-action.component.html',
  styleUrls: ['./bulk-action.component.scss']
})

export class BulkActionComponent {
    @Input() isShow = false;
    @Output() removeTasks = new EventEmitter();

    handleDeleteTaskSelected(): void {
        this.removeTasks.emit();
    }

    dispatchActionBtn(btnType): void {
        if (btnType === 'done') {
            console.log('done');
            return;
        }

        this.handleDeleteTaskSelected();
    }

}
