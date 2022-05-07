import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UserAddComponent } from './views/user/user-add/user-add.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'userCreate',
    component: UserAddComponent
  },
  {
    path: 'userEdit',
    component: UserEditComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
