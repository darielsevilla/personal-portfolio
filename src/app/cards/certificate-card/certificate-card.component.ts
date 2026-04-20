import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-certificate-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css'
})
export class CertificateCardComponent {
  @Input() certificate: string = "";
  @Input() title: string = 'placeholder title';
  @Input() subtitle: string = 'placeholder subtitle';
  @Input() widthPar: string = '100%'
  @Input() spanish: boolean = true;
  bgcolor: string = '#242C3A';
  color: string = '#f4f4f4';
  transform = 'translateY(0)';
  shadow = '0 2px 6px rgba(0,0,0,0.15)';
  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.certificate;
    link.download = this.certificate.split('/').pop() || 'certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  onHover() {
    this.transform = 'translateY(-6px)';
    this.shadow = '0 8px 20px rgba(0,0,0,0.25)'
  }

  onLeave() {
    this.transform = 'translateY(0)';
    this.shadow = '0 2px 6px rgba(0,0,0,0.15)';
  }
}
