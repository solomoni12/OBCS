import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-user-with-application',
  templateUrl: './view-user-with-application.component.html',
  styleUrls: ['./view-user-with-application.component.css']
})
export class ViewUserWithApplicationComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.LoadWorker();
   }

  applicationlist:any;
  dataSource:any;
  assignmentlist:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  LoadWorker(){
    const applicationId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.service.getAllRegisteredUserWithApplications(applicationId).subscribe(res=>{
      this.applicationlist = res.data.user.application;
      console.log(this.applicationlist);
      this.dataSource = new MatTableDataSource(this.applicationlist);
      // console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['applicationId', 'name', 'fname', 'phone_number', 'status', 'action'];

  viewApplication(applicationId: number) {
    this.service.getOneApplication(applicationId).subscribe(res => {
      this.applicationlist = res.data.attributes;
      // console.log(this.applicationlist);
      this.router.navigate(['/view_registerd_user_application'], { queryParams: { id: applicationId} });
    });
  }


}
