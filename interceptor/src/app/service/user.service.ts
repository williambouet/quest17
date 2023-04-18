import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {
    user: User;

  constructor() {
    //   this.user = new User("admin", "ADMIN", true);
    //   this.user = new User("anonymous", "ANONYMOUS", false);
    //   this.user = new User("user", "USER", true);
         this.user = new User("user", "USER", false);


  }

  getRole(): string {
    return this.user.role;
  }

//   login(): Observable<boolean> {
//     return of(false).pipe(delay(3000));
//   }
    
  isConnected(): boolean {
    return this.user.connection;

  }
}
