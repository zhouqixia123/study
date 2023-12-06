import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
// import { record } from 'rrweb';
import { RrwebService } from 'src/app/service/rrweb.service';
import * as rrweb from 'rrweb';
@Component({
  selector: 'app-rr-web',
  templateUrl: './rr-web.component.html',
  styleUrls: ['./rr-web.component.scss']
})
export class RrWebComponent implements OnInit {
  public events = [];
  private recorder: any;
  private replayer: any;
  constructor(
    public rrwebService: RrwebService,
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {
    // this.startRecord();
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
    // this.recorder = rrweb.record({
    //   emit: function (event) {
    //     // 将事件发送到服务器或存储在本地
    //     this.events.push(event);
    //     console.log(event);
    //   }.bind(this), // 使用bind确保正确的this上下文
    //   checkoutEveryNms: 1000, // 每隔1秒生成一个新的事件
    // });
    this.recorder = rrweb.record({
      emit: (event) => {
        // 将事件发送到服务器或存储在本地
        // this.events.push(event);
        this.rrwebService.events.push(event);
        if (this.rrwebService.events.length > 30) {
          // 当事件数量大于 100 时停止录制
          this.recorder();
        }
        console.log(event);
      },
      checkoutEveryNms: 1000, // 每隔1秒生成一个新的事件
    });
  }
  palyr() {
    const targetElement = this.elementRef.nativeElement.querySelector('#rrwebContainer');
    // 启动重放器
    this.replayer = new rrweb.Replayer(this.events, {
      root: targetElement,
      skipInactive: false,
    });
    // 重放保存的事件
    this.replayer.loadEvents(/* 获取保存的事件的方法 */);
    this.replayer.play();
    console.log('startRecord', 'rrweb');
  }
  stop() {
    console.log(this.recorder, '111');
    console.log(rrweb);
    // this.recorder.stop();
  }

  ngOnDestroy(): void {
    // 停止记录器
    // this.recorder.stop();
  }

}
