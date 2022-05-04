import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './views/components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './views/home/home.component';
import { UserAddComponent } from './views/user/user-add/user-add.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { CoursesAddComponent } from './views/courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './views/courses/courses-edit/courses-edit.component';
import { CategoriesComponent } from './views/courses/categories/categories.component';
import { SubCategoriesComponent } from './views/courses/sub-categories/sub-categories.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UserAddComponent,
    UserEditComponent,
    CoursesAddComponent,
    CoursesEditComponent,
    CategoriesComponent,
    SubCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
