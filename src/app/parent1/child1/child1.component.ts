import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
  sharedValue;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedValue = this.sharedService.getSharedValue();
  }

}
