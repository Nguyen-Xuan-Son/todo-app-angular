import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../';
import { saveTask, updateTaskById } from '../../services/local-storage.service';
import { EmitDataService } from '../../services/emit-data.service';
import { convertTime } from '../../utils/convertTime';

const initTask: ITask = {
    title: '',
    description: '',
    dueDate: convertTime(null, 'currentDateTime'),
    piority: 'normal',
};

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.scss']
})
export class CreateAndUpdateComponent {
    @Input() mode: 'CREATE' | 'UPDATE' = 'CREATE';
    @Input() task: ITask = {...initTask};
    @Output() emitTaskUpdated = new EventEmitter();
    minDate = convertTime(null, 'currentDateTime');

    constructor(private emitDataService: EmitDataService) {
    }

    addTask(): void {
        this.task.id = new Date().getTime();
        saveTask(this.task);
        this.emitDataService.updateListTask();
        this.resetTask();
    }

    updateTask(): void {
        updateTaskById(this.task);
        this.emitTaskUpdated.emit(this.task.id);
        this.resetTask();
    }

    resetTask(): void {
        this.task = {...initTask};
    }

    dispatchActionBtn(): void {
        if (!this.task.title) {
            return;
        }

        if (this.mode === 'CREATE') {
            this.addTask();
            return;
        }

        this.updateTask();
    }
}
