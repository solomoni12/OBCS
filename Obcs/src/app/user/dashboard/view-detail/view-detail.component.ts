import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  detaillist: any; 

  constructor(
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.LoadWorker();
  }

  LoadWorker() {
    const applicationId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.service.getOneApplication(applicationId).subscribe(res => {
      this.detaillist = res.data.attributes; 
      console.log(applicationId);
      console.log(this.detaillist);
    });
  }
  
  
}
