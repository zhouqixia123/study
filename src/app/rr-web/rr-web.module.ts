import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrWebRoutingModule } from './rr-web-routing.module';
import { RrWebComponent } from './rr-web/rr-web.component';
import { PlayrrwebComponent } from './playrrweb/playrrweb.component';


@NgModule({
  declarations: [RrWebComponent, PlayrrwebComponent],
  imports: [
    CommonModule,
    RrWebRoutingModule
  ]
})
export class RrWebModule { }
