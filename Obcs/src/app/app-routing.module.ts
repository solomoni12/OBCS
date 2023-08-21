import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LoginSidebarComponent } from './user/login-sidebar/login-sidebar.component';
import { RegisterComponent } from './user/register/register.component';
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
import { AdminHomeComponent } from './user/dashboard/admin-home/admin-home.component';
import { AuthGuard } from './guard/auth.guard';
import { UserProfileComponent } from './user/dashboard/user-profile/user-profile.component';
import { UserSettingComponent } from './user/dashboard/user-setting/user-setting.component';
import { ForgotPasswordComponent } from './user/dashboard/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user/dashboard/reset-password/reset-password.component';

const routes: Routes = [
    { path:'sidebar', component: LoginSidebarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    
    {
       path: '', component: SidenavbarComponent,canActivate: [AuthGuard],
       children:[
        { path: 'certificate', component: CertificateComponent,canActivate: [AuthGuard] },
        { path: 'add_detail', component: AddDetailComponent, canActivate: [AuthGuard] },
        { path: 'manage_detail', component: ManageDetailComponent , canActivate: [AuthGuard]},
        { path: 'view_detail', component: ViewDetailComponent, canActivate: [AuthGuard] },
        { path: 'view_verified', component: ViewVerifiedComponent, canActivate: [AuthGuard] },
        { path: 'verified_application', component: VerifiedApplicationComponent , canActivate: [AuthGuard]},
        { path: 'all_application', component: AllApplicationComponent , canActivate: [AuthGuard]},
        { path: 'rejected_application', component: RejectedApplicationComponent, canActivate: [AuthGuard] },
        { path: 'new_application', component: NewApplicationComponent, canActivate: [AuthGuard] },
        { path: 'search_application', component: SearchComponent, canActivate: [AuthGuard] },
        { path: 'date_report', component: DateReportComponent , canActivate: [AuthGuard]},
        { path: 'user_registered', component: UserRegisteredComponent, canActivate: [AuthGuard] },
        { path: 'view_new_application_details', component: ViewNewApplicationDetailComponent, canActivate: [AuthGuard]},
        { path: 'view_registerd_user_application_details', component: ViewUserWithApplicationComponent, canActivate: [AuthGuard]},
        { path: 'view_registerd_user_application', component: ViewDetailUserComponent, canActivate: [AuthGuard] },
        { path: 'view_user_application_search', component: ViewDetailSearchComponent, canActivate: [AuthGuard] },
        { path: 'dashboard', component: AdminHomeComponent, canActivate: [AuthGuard] },
        { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
        { path: 'change-password', component: UserSettingComponent, canActivate: [AuthGuard] },


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
