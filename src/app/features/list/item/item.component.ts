import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getTaskById, removeTaskById, updateTaskById } from '../../../services/local-storage.service';
import { ITask } from '../../model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent {
  @Input() task: ITask;
  @Output() taskDoneChange = new EventEmitter();
  isShow = false;

  showDetail(): void {
    this.isShow = true;
  }

  updateTask(): void {
    this.isShow = false;
  }

  removeTask(): void {
    removeTaskById(this.task.id);
    this.task = null;
  }

  dispatchActionBtn(type): void {
    if (type === 'detail') {
      this.showDetail();
      return;
    }
    this.removeTask();
  }

  getTaskUpdatedById(id): void {
    const task = getTaskById(id);
    this.task = task;
    this.isShow = false;
  }

  handleCheckbox(): void {
    updateTaskById(this.task);
    this.taskDoneChange.emit(this.task);
  }
}
