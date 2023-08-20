import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LoginSidebarComponent } from './user/login-sidebar/login-sidebar.component';
import { RegisterComponent } from './user/register/register.component';
import { VerifyCerticateComponent } from './user/verify-certicate/verify-certicate.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SidenavbarComponent } from './user/dashboard/sidenavbar/sidenavbar.component';
import { CertificateComponent } from './user/dashboard/certificate/certificate.component';
import { AddDetailComponent } from './user/dashboard/add-detail/add-detail.component';
import { ManageDetailComponent } from './user/dashboard/manage-detail/manage-detail.component';
import { ViewDetailComponent } from './user/dashboard/view-detail/view-detail.component';
import { ViewVerifiedComponent } from './user/dashboard/view-verified/view-verified.component';
import { VerifiedApplicationComponent } from './user/dashboard/verified-application/verified-application.component';
import { AllApplicationComponent } from './user/dashboard/all-application/all-application.component';
import { RejectedApplicationComponent } from './user/dashboard/rejected-application/rejected-application.component';
import { NewApplicationComponent } from './user/dashboard/new-application/new-application.component';
import { SearchComponent } from './user/dashboard/search/search.component';
import { DateReportComponent } from './user/dashboard/date-report/date-report.component';
import { UserRegisteredComponent } from './user/dashboard/user-registered/user-registered.component';
import { ViewNewApplicationDetailComponent } from './user/dashboard/view-new-application-detail/view-new-application-detail.component';
import { ViewUserWithApplicationComponent } from './user/dashboard/view-user-with-application/view-user-with-application.component';
import { ViewDetailUserComponent } from './user/dashboard/view-detail-user/view-detail-user.component';
import { ViewDetailSearchComponent } from './user/dashboard/view-detail-search/view-detail-search.component';

const routes: Routes = [
    { path:'sidebar', component: LoginSidebarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify', component: VerifyCerticateComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
       path: '', component: SidenavbarComponent,
       children:[
        { path: 'certificate', component: CertificateComponent },
        { path: 'add_detail', component: AddDetailComponent },
        { path: 'manage_detail', component: ManageDetailComponent },
        { path: 'view_detail', component: ViewDetailComponent },
        { path: 'view_verified', component: ViewVerifiedComponent },
        { path: 'verified_application', component: VerifiedApplicationComponent },
        { path: 'all_application', component: AllApplicationComponent },
        { path: 'rejected_application', component: RejectedApplicationComponent },
        { path: 'new_application', component: NewApplicationComponent },
        { path: 'search_application', component: SearchComponent },
        { path: 'date_report', component: DateReportComponent },
        { path: 'user_registered', component: UserRegisteredComponent },
        { path: 'view_new_application_details', component: ViewNewApplicationDetailComponent },
        { path: 'view_registerd_user_application_details', component: ViewUserWithApplicationComponent },
        { path: 'view_registerd_user_application', component: ViewDetailUserComponent },
        { path: 'view_user_application_search', component: ViewDetailSearchComponent },
        // view_user_application_search
        // view_registerd_user_application
       ] 

      },
   

    {
      path: "",
      pathMatch: "full",
      redirectTo: "sidebar"
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
