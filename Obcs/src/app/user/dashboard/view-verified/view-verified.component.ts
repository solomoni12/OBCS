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

  refereelist: any; // Variable to store the fetched data

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
      this.refereelist = res.data.attributes;
    });
  }

  downloadCertificate() {
    // Use jsPDF to generate and download the PDF
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
      ['Application Number', this.refereelist?.applicationId],
      ['Full Name', this.refereelist?.full_name],
      ['Gender', this.refereelist?.gender],
      ['Date of Birth', this.refereelist?.date_of_birth],
      ['Place of Birth', this.refereelist?.place_of_birth],
      ['Name of Mother', this.refereelist?.name_of_mother],
      ['Name of Father', this.refereelist?.name_of_father],
      ['Permanent Address of Parents', this.refereelist?.permanent_address],
      ['Postal Address of Parents', this.refereelist?.postal_address],
      ['Parents Mobile Number', this.refereelist?.mbno],
      ['Parents Email', this.refereelist?.email],
      ['Certificate Number', this.refereelist?.applicationId],
    ];

    const cellWidth = 100;
    const cellHeight = 10;
    let x = 80;
    let y = 30;

    rows.forEach(row => {
      const [label, value] = row;

      // Draw border around cell
      pdf.rect(x, y, cellWidth, cellHeight, 'S');

      pdf.text(label + ':', x + 2, y + 7); // Adjust text position within cell
      pdf.text(String(value), x + 65, y + 7); // Adjust text position within cell

      y += cellHeight;
    });

    // Draw border around last cell
    pdf.rect(x, y, cellWidth, cellHeight, 'S');

    pdf.text('THIS IS A COMPUTER GENERATED CERTIFICATE.', pdf.internal.pageSize.getWidth() / 2, y + 20, centerAlignOptions);
  }
}
