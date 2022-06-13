import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass']
})

export class ExchangeComponent {
  @Input() name: string = '';
  @Input() exchange: any

  ngOnInit() {
    const fetchGecko = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/pointpay/tickers?include_exchange_logo=true&depth=false')
      return await response.json()
    }

    fetchGecko().then(
      string => {
				console.log(string)
        this.exchange = string.tickers
      })
  }

  fnPrice(value): string {
    return `$${value.toFixed(5)}`;
  }

  fnVolume(value): string {
    return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(value);
  }
}