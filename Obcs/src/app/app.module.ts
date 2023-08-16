import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginSidebarComponent } from './user/login-sidebar/login-sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyCerticateComponent } from './user/verify-certicate/verify-certicate.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SidenavbarComponent } from './user/dashboard/sidenavbar/sidenavbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { AddDetailComponent } from './user/dashboard/add-detail/add-detail.component';
import { ManageDetailComponent } from './user/dashboard/manage-detail/manage-detail.component';
import { CertificateComponent } from './user/dashboard/certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginSidebarComponent,
    VerifyCerticateComponent,
    DashboardComponent,
    SidenavbarComponent,
    AddDetailComponent,
    ManageDetailComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
