import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-detail-user',
  templateUrl: './view-detail-user.component.html',
  styleUrls: ['./view-detail-user.component.css']
})
export class ViewDetailUserComponent implements OnInit {

  detaillist: any; // Variable to store the fetched data

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
      this.detaillist = res.data.attributes; // Notice the change here
      console.log(applicationId);
      console.log(this.detaillist);
    });
  }

}
