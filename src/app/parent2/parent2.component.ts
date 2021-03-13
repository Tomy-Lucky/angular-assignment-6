import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers: [SharedService]
})
export class Parent2Component implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedValue = this.sharedService.getSharedValue();
  }

}
