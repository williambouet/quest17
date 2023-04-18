import { Component, OnInit } from '@angular/core';
import { LogInterceptor } from './core/LogInterceptor';
import { ExecutionTimeService } from './service/execution-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'interceptor';

  constructor(public serviceTime: ExecutionTimeService) {
  }

  ngOnInit(): void {
    console.log("service appelé");
    this.serviceTime.getTime();   
  }

  time() {
    this.serviceTime.getTime();
  }

}
