import { Component } from '@angular/core';
import { CardStatisticsComponent } from '../../../../shared/components/card-statistics/card-statistics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardStatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
