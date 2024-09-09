import { Component } from '@angular/core';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export default class CompanyComponent {

}
