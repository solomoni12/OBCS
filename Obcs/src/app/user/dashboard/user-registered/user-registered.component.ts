import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-registered',
  templateUrl: './user-registered.component.html',
  styleUrls: ['./user-registered.component.css']
})
export class UserRegisteredComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router,
    // private route: ActivatedRoute
  ){
    this.LoadWorker();
   }

  applicationlist:any;
  dataSource:any;
  assignmentlist:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  LoadWorker(){
    this.service.getAllRegisteredUser().subscribe(res=>{
      this.applicationlist = res.data.registeredUser;
      console.log(this.applicationlist);
      this.dataSource = new MatTableDataSource(this.applicationlist);
      // console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fname', 'lname', 'address', 'mbno', 'action'];

  viewApplication(applicationId: number) {
    this.service.getAllRegisteredUserWithApplications(applicationId).subscribe(res => {
      this.applicationlist = res.data;
      console.log(this.applicationlist);
      this.router.navigate(['/view_registerd_user_application_details'], { queryParams: { id: applicationId} });
    });
  }

  deleteUser(id: number){
    const deletepop = this.service.deleteRegisteredUser(id)
          .subscribe({
            next:(res)=>{
              // alertifyjs.success('farm deleted')
            },
            error:()=>{
              // alertifyjs.error('Failed. Please Try Again');
            }
          })
      if(deletepop){
        this.LoadWorker();
      }
    }

}
