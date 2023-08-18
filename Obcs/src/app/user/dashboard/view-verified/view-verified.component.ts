import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import jsPDF from 'jspdf'; // Import jsPDF without the 'build'

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
    const pdfContent = this.generateCertificateContent();

    const pdf = new jsPDF();
    pdf.text(pdfContent, 10, 10); // Adjust the positioning as needed
    pdf.save('certificate.pdf');
  }

  generateCertificateContent() {
    const certificateContent = `
      Certificate Details

      Application ID: ${this.refereelist?.applicationId}
      Full Name: ${this.refereelist?.full_name}
      Date of Birth: ${this.refereelist?.date_of_birth}
      Email: ${this.refereelist?.email}
      Gender: ${this.refereelist?.gender}
      Mobile Number: ${this.refereelist?.mbno}
      Name of Father: ${this.refereelist?.name_of_father}
      Name of Mother: ${this.refereelist?.name_of_mother}
      Permanent Address: ${this.refereelist?.permanent_address}
      Place of Birth: ${this.refereelist?.place_of_birth}
      Postal Address: ${this.refereelist?.postal_address}
      Status: ${this.refereelist?.status}
    `;

    return certificateContent;
  }
}
