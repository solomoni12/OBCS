import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import jsPDF, { TextOptionsLight } from 'jspdf';
import { AuthService } from 'src/app/service/auth.service';
import { UpdateNewApplicationPopupComponent } from '../update-new-application-popup/update-new-application-popup.component';
@Component({
  selector: 'app-view-new-application-detail',
  templateUrl: './view-new-application-detail.component.html',
  styleUrls: ['./view-new-application-detail.component.css']
})
export class ViewNewApplicationDetailComponent implements OnInit {

  newapplicationlist: any;

  constructor(
    private service: AuthService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.LoadNewApplication();
  }

  ngOnInit(): void {
    this.LoadNewApplication();
  }

  LoadNewApplication() {
    const applicationId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.service.getOneApplication(applicationId).subscribe(res => {
      this.newapplicationlist = res.data.attributes;
    });
  }

  UpdateNewApplication(newapplicationlist:any){
    
    const popup = this.dialog.open(UpdateNewApplicationPopupComponent,{
      // enterAnimationDuration:'1000ms',
      // exitAnimationDuration:'100ms',
      width:'40%',
      data:newapplicationlist
    })
    popup.afterClosed().subscribe(res=>{
      this.LoadNewApplication();
    });
  }
 
  


}
