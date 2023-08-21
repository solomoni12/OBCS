import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import jsPDF, { TextOptionsLight } from 'jspdf';

@Component({
  selector: 'app-view-verified',
  templateUrl: './view-verified.component.html',
  styleUrls: ['./view-verified.component.css']
})
export class ViewVerifiedComponent implements OnInit {

  newapplicationlist: any; 

  constructor(
    private service: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.LoadWorker();
  }

  LoadWorker() {
    const applicationId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.service.getOneApplication(applicationId).subscribe(res => {
      this.newapplicationlist = res.data.attributes;
    });
  }

  downloadCertificate() {
    
    const pdf = new jsPDF('landscape');
    pdf.setFontSize(12);

    this.generateCertificateContent(pdf);

    // Save the PDF
    pdf.save('Birth-Certificate.pdf');
  }

  generateCertificateContent(pdf: jsPDF) {
    const centerAlignOptions: TextOptionsLight = { align: 'center' };

    pdf.text('Birth Certificate Details', pdf.internal.pageSize.getWidth() / 2, 10, centerAlignOptions);

    const rows = [
      ['Application Number', this.newapplicationlist?.applicationId],
      ['Full Name', this.newapplicationlist?.full_name],
      ['Gender', this.newapplicationlist?.gender],
      ['Date of Birth', this.newapplicationlist?.date_of_birth],
      ['Place of Birth', this.newapplicationlist?.place_of_birth],
      ['Name of Mother', this.newapplicationlist?.name_of_mother],
      ['Name of Father', this.newapplicationlist?.name_of_father],
      ['Permanent Address of Parents', this.newapplicationlist?.permanent_address],
      ['Postal Address of Parents', this.newapplicationlist?.postal_address],
      ['Parents Mobile Number', this.newapplicationlist?.mbno],
      ['Parents Email', this.newapplicationlist?.email],
      ['Certificate Number', this.newapplicationlist?.applicationId],
    ];

    const cellWidth = 100;
    const cellHeight = 10;
    let x = 80;
    let y = 30;

    rows.forEach(row => {
      const [label, value] = row;

      // Draw border around cell
      pdf.rect(x, y, cellWidth, cellHeight, 'S');
      // Adjust text position within cell
      pdf.text(label + ':', x + 2, y + 7); 
      pdf.text(String(value), x + 65, y + 7); 

      y += cellHeight;
    });

    // Draw border around last cell
    pdf.rect(x, y, cellWidth, cellHeight, 'S');

    pdf.text('THIS IS A COMPUTER GENERATED CERTIFICATE.', pdf.internal.pageSize.getWidth() / 2, y + 20, centerAlignOptions);
  }
}
