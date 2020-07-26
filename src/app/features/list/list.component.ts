import { Component, OnInit } from '@angular/core';
import { EmitDataService } from '../../services/emit-data.service';
import { getTasks, removeTaskById } from '../../services/local-storage.service';
import { ITask } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  tasks: ITask[] = [];
  tasksClone: ITask[] = [];
  isShowBulkAction = false;
  titleSearch: string;

  constructor(private emitDataService: EmitDataService) {
  }

  ngOnInit(): void {
    this.emitDataService.messageBus.subscribe(() => {
      this.tasks = getTasks();
      this.titleSearch = '';
    });
    this.handleShowBulkAction();
  }

  handleShowBulkAction(): void {
    this.isShowBulkAction = this.tasks.some((task: ITask) => {
      return task.isDone;
    });
  }
  removeTasksById(): void {
    this.tasks.forEach((task: ITask) => {
      if (task.isDone) {
        removeTaskById(task.id);
      }
    });

    this.tasks = getTasks();
    this.handleShowBulkAction();
  }

  handleFilter(e): void {
    const tasks = getTasks();
    if (e) {
      this.tasks = tasks.filter((task: ITask) => {
        if (task.title.indexOf(e) !== -1) {
          return true;
        }
      });

      return;
    }

    this.tasks = tasks;
  }
}
