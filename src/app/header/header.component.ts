import { Observable } from 'rxjs';
import { CurrencyState } from './../store/currency.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Rate } from '../models/rate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Select(CurrencyState.currencyRate)
  public currencyRate$: Observable<Rate[]> | undefined;

}
