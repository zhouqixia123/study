import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'pwa', loadChildren: () => import('./pwa-project/pwa-project.module').then(m => m.PwaProjectModule) },
  { path: 'rrweb', loadChildren: () => import('./rr-web/rr-web.module').then(m => m.RrWebModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
