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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VerifyCerticateComponent } from './user/verify-certicate/verify-certicate.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SidenavbarComponent } from './user/dashboard/sidenavbar/sidenavbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { AddDetailComponent } from './user/dashboard/add-detail/add-detail.component';
import { ManageDetailComponent } from './user/dashboard/manage-detail/manage-detail.component';
import { CertificateComponent } from './user/dashboard/certificate/certificate.component';
import { TokenInterceptor } from './service/token.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ViewDetailComponent } from './user/dashboard/view-detail/view-detail.component';
import { ViewVerifiedComponent } from './user/dashboard/view-verified/view-verified.component';
import { NewApplicationComponent } from './user/dashboard/new-application/new-application.component';
import { AllApplicationComponent } from './user/dashboard/all-application/all-application.component';
import { VerifiedApplicationComponent } from './user/dashboard/verified-application/verified-application.component';
import { RejectedApplicationComponent } from './user/dashboard/rejected-application/rejected-application.component';
import { DateReportComponent } from './user/dashboard/date-report/date-report.component';
import { UserRegisteredComponent } from './user/dashboard/user-registered/user-registered.component';
import { SearchComponent } from './user/dashboard/search/search.component';
import { ViewNewApplicationDetailComponent } from './user/dashboard/view-new-application-detail/view-new-application-detail.component';
import { UpdateNewApplicationPopupComponent } from './user/dashboard/update-new-application-popup/update-new-application-popup.component';
import {MatDialogModule} from '@angular/material/dialog';

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
    CertificateComponent,
    ViewDetailComponent,
    ViewVerifiedComponent,
    NewApplicationComponent,
    AllApplicationComponent,
    VerifiedApplicationComponent,
    RejectedApplicationComponent,
    DateReportComponent,
    UserRegisteredComponent,
    SearchComponent,
    ViewNewApplicationDetailComponent,
    UpdateNewApplicationPopupComponent
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
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
