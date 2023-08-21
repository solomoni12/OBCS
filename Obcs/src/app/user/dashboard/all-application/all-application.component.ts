import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-all-application',
  templateUrl: './all-application.component.html',
  styleUrls: ['./all-application.component.css']
})
export class AllApplicationComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router,
  ){
    this.LoadWorker();
   }

  applicationlist:any;
  dataSource:any;
  assignmentlist:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  LoadWorker(){
    this.service.getAllApplication().subscribe(res=>{
      this.applicationlist = res.data.verified_applications;
      console.log(this.applicationlist);
      this.dataSource = new MatTableDataSource(this.applicationlist);
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
      this.router.navigate(['/view_detail'], { queryParams: { id: applicationId} });
    });
  }


}
