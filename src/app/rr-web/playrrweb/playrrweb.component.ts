import { Component, OnInit, ElementRef } from '@angular/core';
import { RrwebService } from 'src/app/service/rrweb.service';
import * as rrweb from 'rrweb';
@Component({
  selector: 'app-playrrweb',
  templateUrl: './playrrweb.component.html',
  styleUrls: ['./playrrweb.component.scss']
})
export class PlayrrwebComponent implements OnInit {
  public replayer;
  constructor(
    public rrwebService: RrwebService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    console.log(this.rrwebService.events, 'init');
  }
  playrecord() {
    if(this.rrwebService.events.length < 2){
      return;
    }
    // console.log(this.rrwebService.events, 'playrecord');
    // this.replayer.play();
    const targetElement = this.elementRef.nativeElement.querySelector('#main');
    // 启动重放器
    this.replayer = new rrweb.Replayer(this.rrwebService.events, {
      root: targetElement,
      skipInactive: false,
    });
    // 重放保存的事件
    // this.replayer.loadEvents(/* 获取保存的事件的方法 */);
    this.replayer.play();
    console.log('startRecord', 'rrweb');
  }
}
