import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-withdrawal-info',
  templateUrl: './withdrawal-info.component.html',
  styleUrls: ['./withdrawal-info.component.sass']
})
export class WithdrawalInfoComponent {
  @Input() name: string = '';
  @Input() crypto: any = '';

	wtx(url) {
		const api = fetch(url).then(res => res.json());
		return api
	}

  ngOnInit() {
		switch (this.name) {
			case "Bitrue": {
				this.wtx('https://openapi.bitrue.com/api/v1/exchangeInfo').then(api => {
					let coins = api.coins
					for (let coin of coins) {
						if (coin.coin === 'pxp') {
							const info = { 
								min_withdrawal: `${parseFloat(coin.chainDetail[0].minWithdraw).toFixed(2)} PXP`,
								fee_withdrawal: `${parseFloat(coin.chainDetail[0].withdrawFee).toFixed(2)} PXP`
							}
							this.crypto = info
						}
					}
				})
				break;
			}
			case "BitGlobal": {
				this.wtx('https://global-openapi.bithumb.pro/openapi/v1/spot/config').then(api => {
					const coins = api.data.coinConfig
					for (let coin of coins) {
						if (coin.name === 'PXP') {
							const info = { 
								min_withdrawal: `${coin.minWithdraw} PXP`,
								fee_withdrawal: `${parseFloat(coin.withdrawFee).toFixed(2)} PXP`,
							}
							this.crypto = info
						}
					}
				})
				break;
			}
			case "Bittrex": {
				this.wtx('https://fees.pxp.workers.dev/?api=https://api.bittrex.com/v3/currencies/pxp').then(api => {
					const info = { 
						min_withdrawal: `N/A`,
						fee_withdrawal: `${parseFloat(api.txFee).toFixed(2)} PXP`
					}
					this.crypto = info
				})
				break;
			}
			case "WhiteBIT": {
				this.wtx('https://fees.pxp.workers.dev/?api=https://whitebit.com/api/v4/public/fee').then(api => {
					const info = { 
						min_withdrawal: `${parseFloat(api.PXP.withdraw.min_amount).toFixed(2)} PXP`,
						fee_withdrawal: `${parseFloat(api.PXP.withdraw.fixed).toFixed(2)} PXP`
					}
					this.crypto = info
				})
				break;
			}
			case "Solidbit": {
				const info = { 
					min_withdrawal: `N/A`,
					fee_withdrawal: `0 PXP`
				}
				this.crypto = info
				break;
			}
			case "CoinTiger": {
				this.wtx('https://fees.pxp.workers.dev/?api=https://api.cointiger.com/exchange/trading/api/v2/currencys').then(api => {
					const coins = api.data['usdt-partition']
					for (let coin of coins) {
						if (coin.baseCurrency === 'pxp') {
							const info = { 
								min_withdrawal: `${parseFloat(coin.withdrawOneMin).toFixed(2)} PXP`,
								fee_withdrawal: `${parseFloat(coin.withdrawFeeMin).toFixed(2)} PXP`
							}
							this.crypto = info
						}
					}
				})
				break;
			}
			case "Uniswap (v3)": {
				this.wtx('https://api.gasprice.io/v1/estimates?countervalue=usd').then(api => {
					let ethereum = parseFloat(api.result.ethPrice)
					let min_fee = ((parseFloat(api.result.eco.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)
					let max_fee = ((parseFloat(api.result.instant.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)
	
					const info = { 
						min_withdrawal: `N/A`,
						fee_withdrawal: `$${min_fee} ~ $${max_fee}`
					}
					this.crypto = info
				})
				break;
			}
			default: {
				break;
			}
		}
	}
}