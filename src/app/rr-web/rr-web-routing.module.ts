import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayrrwebComponent } from './playrrweb/playrrweb.component';
import { RrWebComponent } from './rr-web/rr-web.component';

const routes: Routes = [
  {
    path: '',
    component: RrWebComponent,
  },
  {
    path: 'play',
      component: PlayrrwebComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrWebRoutingModule { }
