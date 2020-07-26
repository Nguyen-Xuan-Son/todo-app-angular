import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitDataService {
  public messageBus = new BehaviorSubject(null);

  updateListTask(): void {
    this.messageBus.next(null);
  }
}
