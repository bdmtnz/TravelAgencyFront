import { Component } from '@angular/core';
import { CardStatisticsComponent } from '../../../../shared/components/card-statistics/card-statistics.component';
import { PageTitleService } from '../../../../shared/services/page-title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardStatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
/**
 *
 */
  constructor(
    private readonly _pageTitle: PageTitleService
  ) {
    this._pageTitle.setPageTitle({
      title: 'Inicio',
      backpath: '/layout'
    })
  }
}
