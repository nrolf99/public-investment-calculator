import { Component, Input } from '@angular/core';
import { InvestmentInput } from '../types/investment-input.model';
import { InvestmentOutput } from '../types/investment-output.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentOutput[] = [];

}
