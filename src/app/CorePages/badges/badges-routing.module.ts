import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgesComponent } from './badges.component';


const routes: Routes = [
  {
    path: '',
    component: BadgesComponent,
    data: {
      title: 'Badges'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesRoutingModule { }