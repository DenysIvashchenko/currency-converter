import { Constants } from './../../constants/constants';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Rate } from 'src/app/models/rate.model';
import { CurrencyState } from 'src/app/store/currency.state';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit {

  public formValue: FormGroup | undefined;

  @Output() currencyOutput: EventEmitter<any> = new EventEmitter();
  @Input() id: string = '';

  @Select(CurrencyState.currencyRate)
  public currencyRate$: Observable<Rate[]> | undefined;

  public currencyConverter = new FormGroup({
    amount: new FormControl(Constants.AMOUNT_MIN),
    sale: new FormControl(Constants.SALE_RATE),
  });

  ngOnInit(): void {    
    this.currencyOutput.emit(this.currencyConverter);
  }

  public resetValue(): void {
    this.currencyConverter.setValue({ amount: Constants.AMOUNT_MIN, sale: Constants.SALE_RATE })
  }
    
}
