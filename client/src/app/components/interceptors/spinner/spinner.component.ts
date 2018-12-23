import { HttpinterceptorServiceService, RestStatus } from './../../../service/interceptor/httpInterceptor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isSpinnerNeeded = false;
  isErrorOccured = false;

  constructor(private httpinterceptorServiceService: HttpinterceptorServiceService) { }

  ngOnInit() {
      this.httpinterceptorServiceService.notify.subscribe(status=>{
      this.isSpinnerNeeded = status==RestStatus.InProgress; 
      this.isErrorOccured = status == RestStatus.Error;
    })
  }
}
