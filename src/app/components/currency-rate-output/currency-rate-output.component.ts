import { Component, Input } from '@angular/core';
import { Rate } from 'src/app/models/rate.model';

@Component({
  selector: 'app-currency-rate-output',
  templateUrl: './currency-rate-output.component.html',
  styleUrls: ['./currency-rate-output.component.scss']
})
export class CurrencyRateOutputComponent {

  @Input() rate: Rate | undefined;

}
