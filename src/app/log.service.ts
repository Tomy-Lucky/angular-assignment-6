import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
  }

  write(message) {
    console.log(message);
  }

}
