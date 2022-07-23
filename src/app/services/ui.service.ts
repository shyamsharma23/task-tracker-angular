import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddtask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddtask(): void {
    this.showAddtask = !this.showAddtask;
    this.subject.next(this.showAddtask)
  }


  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
