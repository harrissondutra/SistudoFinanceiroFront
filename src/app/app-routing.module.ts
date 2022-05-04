import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/courses/categories/categories.component';
import { CoursesAddComponent } from './views/courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './views/courses/courses-edit/courses-edit.component';
import { HomeComponent } from './views/home/home.component';
import { UserAddComponent } from './views/user/user-add/user-add.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { SubCategoriesComponent } from './views/courses/sub-categories/sub-categories.component';

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
  {
    path: 'coursesAdd',
    component: CoursesAddComponent
  },
  {
    path: 'coursesEdit',
    component: CoursesEditComponent
  },

  {
    path: 'categories',
    component: CategoriesComponent
  },

  {
    path: 'subCategories',
    component: SubCategoriesComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
