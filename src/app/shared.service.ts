import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedValue = Math.floor(Math.random() * 100);

  constructor(private logService: LogService) {
  }

  getSharedValue() {
    this.logService.write('Shared value');
    return this.sharedValue;
  }
}
