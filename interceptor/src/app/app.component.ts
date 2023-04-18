import { Component, OnInit } from '@angular/core';
import { LogInterceptor } from './core/LogInterceptor';
import { ExecutionTimeService } from './service/execution-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptor';

}
