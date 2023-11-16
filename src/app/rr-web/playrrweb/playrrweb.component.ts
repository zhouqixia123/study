import { Component, OnInit } from '@angular/core';
import { RrwebService } from 'src/app/service/rrweb.service';

@Component({
  selector: 'app-playrrweb',
  templateUrl: './playrrweb.component.html',
  styleUrls: ['./playrrweb.component.scss']
})
export class PlayrrwebComponent implements OnInit {
  public replayer;
  constructor(
    public rrwebService: RrwebService,
  ) { }

  ngOnInit(): void {
    console.log(this.rrwebService.events, 'init');
  }
  playrecord() {
    console.log(this.rrwebService.events, 'playrecord');
    this.replayer.play();
  }
}
