import { HttpCallStatus } from './../../interceptors/HttpCallStatusEnum';
import { Injectable } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorServiceService {
 
  pendingOutCalls =0;
  isError = false;
  notify: Subject<String> = new Subject<String>();
 
  constructor() { }
  
  onNotify(status:HttpCallStatus):void {
          this.countUpdate(status);
          this.pendingOutCalls && this.notify.next(RestStatus.InProgress);
          !this.pendingOutCalls && this.notify.next(RestStatus.Done);
          this.isError && this.notify.next(RestStatus.Error);
  }
  
  countUpdate(status:HttpCallStatus){
    if(!this.pendingOutCalls) this.isError=false;

    status === HttpCallStatus.HttpCallOut? this.pendingOutCalls++: this.pendingOutCalls--;
    status === HttpCallStatus.HttpCallInError && (this.isError=true)
    }
  
}

/* Enum to be used for this Service */
export enum RestStatus {
  InProgress ="InProgress",
  Done = "Done",
  Error= "Error" 
}