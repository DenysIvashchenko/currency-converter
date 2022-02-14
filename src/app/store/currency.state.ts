import { Observable, tap } from 'rxjs';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Rate } from '../models/rate.model';
import { GetCurrentRate } from './currency.action';
import { CurrencyService } from '../service/currency.service';

export interface CurrencyStateModel {
  rates: Rate[];
}

@State<CurrencyStateModel>({
  name: 'currency',
  defaults: {
    rates: [],
  }
})

@Injectable()
export class CurrencyState {

  @Selector()
  static currencyRate(state: CurrencyStateModel): Rate[] { return state.rates }

  constructor(private currencyService : CurrencyService) { }

  @Action(GetCurrentRate)
  SidenavToggle({ patchState }: StateContext<CurrencyStateModel>): Observable<Rate[]> {
    return this.currencyService
    .getCurrency()
    .pipe(tap((currency: Rate[]) => patchState({ rates: currency })));
  }
  
}