import { Component, OnInit } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less']
})
export class MonitorComponent implements OnInit {
    array = [1, 2, 3, 4,6];
    //create 2 conponent 
    //cpn 1 : slideshow arr name all member group
    //cpn 2: slide show image
  constructor() { }
  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
  ngOnInit() {
  }

}