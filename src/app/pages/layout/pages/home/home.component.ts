import { Component } from '@angular/core';
import { CardStatisticsComponent } from '../../../../shared/components/card-statistics/card-statistics.component';
import { PageTitleService } from '../../../../shared/services/page-title.service';
import { NgFor } from '@angular/common';
import { CardStateService } from './service/card-state.service';
import { IStadisticCards } from '../../../../shared/models/card-state.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardStatisticsComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
/**
 *
 */
  cards: IStadisticCards = {
    hoteles: {
      deshabilitado: 0,
      habilitados: 0,
      n_creados: 0
    }
  } as IStadisticCards
  
  constructor(
    private readonly _pageTitle: PageTitleService,
    private readonly _cardStadistic: CardStateService
  ) {
    this._pageTitle.setPageTitle({
      title: 'Inicio',
      backpath: '/layout'
    })

    this._cardStadistic.getStadistic().subscribe(resp => {
      this.cards = resp.data
      console.log(this.cards)
    })
  }
}
