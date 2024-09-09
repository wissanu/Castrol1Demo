import { Component } from '@angular/core';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export default class CarComponent {

}
