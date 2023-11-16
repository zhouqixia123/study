import { Component, OnInit } from '@angular/core';
import { record } from 'rrweb';

import { RrwebService } from 'src/app/service/rrweb.service';

@Component({
  selector: 'app-rr-web',
  templateUrl: './rr-web.component.html',
  styleUrls: ['./rr-web.component.scss']
})
export class RrWebComponent implements OnInit {
  public events = [];
  public replayer = null;
  constructor(
    public rrwebService: RrwebService,
  ) {

  }

  ngOnInit(): void {
    this.startRecord();
  }

  test1() {
    console.log('test1');
  }
  test2() {
    console.log('test2');
  }
  test3() {
    console.log('test3');
  }
  startRecord() {
    console.log(record, 'rrweb');
  }


}
