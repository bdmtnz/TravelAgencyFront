import { Component, Input, OnInit } from '@angular/core';
import { IStadisticCards } from '../../models/card-state.model';

@Component({
  selector: 'app-card-statistics',
  standalone: true,
  imports: [],
  templateUrl: './card-statistics.component.html',
  styleUrl: './card-statistics.component.scss'
})

export class CardStatisticsComponent  implements OnInit{
@Input () data: any;
/**
 *
 */
constructor() {}
  ngOnInit(): void {
    console.log(this.data)
  }

}
