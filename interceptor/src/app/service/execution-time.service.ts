import { Injectable } from '@angular/core';
import { LogInterceptor } from '../core/LogInterceptor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ExecutionTimeService {

    constructor(public http: HttpClient) { }

    getTime(){

        return this.http.get('http://localhost:4200', {responseType: "text"}).subscribe((data) => {
            // Réponse du serveur
             console.log(data);
          });
    }
}