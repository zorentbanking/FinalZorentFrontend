import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: false
})
export class FooterComponent {

  bankName: string = 'Zorent Bank';

  customerCare: string = '1800-202-9090';

  emergencySupport: string = '1800-999-1111';

  email: string = 'support@zorentbank.com';

}
