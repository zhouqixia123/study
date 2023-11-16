import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaProjectRoutingModule } from './pwa-project-routing.module';
import { PwaComponent } from './pwa/pwa.component';


@NgModule({
  declarations: [PwaComponent],
  imports: [
    CommonModule,
    PwaProjectRoutingModule
  ]
})
export class PwaProjectModule { }
