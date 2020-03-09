import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleHttpConncetionService {

  apiURL = 'http://localhost:8091';

  constructor(private http: HttpClient) { 


  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

simpleAPICalls() : Observable<any> {
  return this.http.get<any>(this.apiURL + '/message')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )

}
handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
 // window.alert(errorMessage);
  return throwError(errorMessage);
}
}
