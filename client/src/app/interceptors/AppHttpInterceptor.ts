import { HttpCallStatus } from './HttpCallStatusEnum';
import { HttpinterceptorServiceService } from "../service/interceptor/httpInterceptor-service.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private interceptorService: HttpinterceptorServiceService) {}

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.interceptorService.onNotify(HttpCallStatus.HttpCallOut);

    return next.handle(req).pipe(
      tap(event => {
          if (event instanceof HttpResponse) {
            this.interceptorService.onNotify(HttpCallStatus.HttpCallInSuccess);
          }
        },error => {
          this.interceptorService.onNotify(HttpCallStatus.HttpCallInError);
        }
      )
    );
  }
}


