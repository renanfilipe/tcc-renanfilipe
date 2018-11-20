import {Tickers, Balances, Orders} from "./../mongo/collections";
import {Meteor} from 'meteor/meteor';
import BinanceWS from "binance/lib/ws";
import BinanceRest from "binance/lib/rest";

class Collector {
    constructor() {
        this.binanceWS = new BinanceWS(true);
        this.binanceRest = new BinanceRest({
	        key: '',
	        secret: '',
        });
    }

    start(){
        const exchange = "BINANCE";
        this.binanceWS.onAllTickers(
            Meteor.bindEnvironment(data => {
                data.map(ticker => {
                    const {symbol, priceChangePercent, high, low, currentClose, quoteAssetVolume} = ticker;
                    Tickers.upsert(
                        {
                            exchange,
                            symbol
                        },
                        {
                            exchange,
                            symbol,
                            high: parseFloat(high),
                            low: parseFloat(low),
                            change: parseFloat(priceChangePercent),
                            price: parseFloat(currentClose),
                            volume: parseFloat(quoteAssetVolume)
                        },
                        (err) => {
                            if(err) {
                                console.log(err)
                            }
                        }
                    )
                })
            })
        );

        this.binanceWS.onUserData(binanceRest,
	        Meteor.bindEnvironment(data => {
	        	console.log(data);
	        	if(data.eventType === "executionReport") {
	        		const {
				        tradeTime, eventTime, symbol, orderId, orderType, orderStatus,
				        quantity, price, stopPrice, accumulatedQuantity, lastTradePrice,
				        tradeId,
	        		} = data;
			        Orders.upsert(
				        {
					        exchange,
					        symbol,
							userId,
				        },
				        {
					        exchange,
					        symbol,
					        high: parseFloat(high),
					        low: parseFloat(low),
					        change: parseFloat(priceChangePercent),
					        price: parseFloat(currentClose),
					        volume: parseFloat(quoteAssetVolume)
				        },
				        (err) => {
					        if(err) {
						        console.log(err)
					        }
				        }
			        )
		        }
	        })
        );
        // this.binanceRest.exchangeInfo(
        //     Meteor.bindEnvironment(data => {
        //         console.log("data", data);
        //         data["symbols"].map(ticker => {
        //             const {symbol, filters, baseAssetPrecision, quotePrecision} = ticker;
        //             Tickers.upsert(
        //                 {
        //                     exchange,
        //                     symbol
        //                 },
        //                 {
        //                     exchange,
        //                     symbol,
        //                     filters,
        //                     coinPrecision: baseAssetPrecision,
        //                     pairPrecision: quotePrecision,
        //                 },
        //                 (err) => {
        //                     if(err) {
        //                         console.log(err)
        //                     }
        //                 }
        //             )
        //         });
        //         console.log("carregou a porra toda")
        //     })
        // )
    }
}

export default Collector;

