import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogInterceptor } from './core/LogInterceptor';
import { ExecutionTimeService } from './service/execution-time.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    },
    ExecutionTimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
