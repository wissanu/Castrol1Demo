import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export default class PartsComponent {

}
