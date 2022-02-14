import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Rate } from './models/rate.model';
import { Select, Store } from '@ngxs/store';
import { GetCurrentRate } from './store/currency.action';
import { CurrencyState } from './store/currency.state';
import { Observable } from 'rxjs';
import { Constants } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'currency-converter';
  public rates: Rate[] = [];
  public currencyValue: FormGroup | undefined;
  public currencyValue2: FormGroup | undefined;
  public amountTwo: number = Constants.AMOUNT_MIN;
  public saleTwo: number = +Constants.SALE_RATE;
  public amountOne: number = Constants.AMOUNT_MIN;
  public saleOne: number = +Constants.SALE_RATE;
  public sumOne: number | undefined;
  public sumTwo: number | undefined;
 
  @Select(CurrencyState.currencyRate)
  public currencyRate$: Observable<Rate[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCurrentRate());  
  }

  firstForm(event: any): void {
    this.currencyValue = event;
    this.currencyValue?.valueChanges
    .subscribe(currency => {
      this.amountOne = currency.amount;
      this.saleOne = currency.sale;

      this.sumOne = this.amountOne * this.saleOne / this.saleTwo;

     this.currencyValue2?.get('amount')?.setValue(this.sumOne);

    });
  }

  secondForm(event: any): void {
    this.currencyValue2 = event;
    this.currencyValue2?.valueChanges
    .subscribe(currency => {
      this.amountTwo = currency.amount;
      this.saleTwo = currency.sale;

      this.sumTwo = this.amountTwo * this.saleTwo / this.saleOne;

      // this.currencyValue2?.get('amount')?.setValue(this.sumTwo);

    });
  }
}
