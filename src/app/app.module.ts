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
import { ContaCreateComponent } from './views/conta/conta-create/conta-create.component';
import { ContaUpdateComponent } from './views/conta/conta-update/conta-update.component';
import { ContaDeleteComponent } from './views/conta/conta-delete/conta-delete.component';
import { AgenciasCreateComponent } from './views/agencias/agencias-create/agencias-create.component';
import { AgenciasUpdateComponent } from './views/agencias/agencias-update/agencias-update.component';
import { AgenciasDeleteComponent } from './views/agencias/agencias-delete/agencias-delete.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UserAddComponent,
    UserEditComponent,
    ContaCreateComponent,
    ContaUpdateComponent,
    ContaDeleteComponent,
    AgenciasCreateComponent,
    AgenciasUpdateComponent,
    AgenciasDeleteComponent,
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
