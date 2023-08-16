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
