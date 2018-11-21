import {Tickers, Balances, Orders} from "./../mongo/collections";
import {Meteor} from "meteor/meteor";
import BinanceWS from "binance/lib/ws";
import BinanceRest from "binance/lib/rest";
import {accountInfo} from "./../config/config";

class Collector {
    constructor() {
        this.binanceWS = new BinanceWS(true);
        this.binanceRest = new BinanceRest({
	        key: accountInfo.BINANCE.key,
	        secret: accountInfo.BINANCE.secret,
        });
    }

    start(){
        const exchange = "BINANCE";
        const userId = "LJYaGxKirz6ahxNdT";

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

        this.binanceWS.onUserData(this.binanceRest,
	        Meteor.bindEnvironment(data => {
	            console.log("chegou dados");
	        	if(data && data.eventType === "executionReport") {
	        		const {
				        eventTime, symbol, orderId, orderType, orderStatus, quantity, price, stopPrice,
                        lastTradePrice, accumulatedQuantity, side, maker, rejectReason,
	        		} = data;

			        Orders.upsert(
                        {
                            exchange,
                            symbol,
                            userId,
                            orderId,
                        },
				        {
                            exchange,
					        symbol,
                            userId,
                            side,
                            eventTime: new Date(eventTime),
                            orderId,
                            orderType,
                            orderStatus,
                            quantity: parseFloat(quantity),
                            price: parseFloat(price),
                            stopPrice: parseFloat(stopPrice),
                            accumulatedQuantity: parseFloat(accumulatedQuantity),
                            lastTradePrice: parseFloat(lastTradePrice),
                            maker,
                            rejectReason,
				        },
				        (err) => {
					        if(err) {
						        console.log(err);
					        }
				        }
			        )
		        } else if(data && data.eventType === "outboundAccountInfo") {
                    const {balances} = data;
                    Balances.upsert(
                        {
                            userId,
                            exchange,
                        },
                        {
                            userId,
                            exchange,
                            balances,
                        },
                        (err) => {
                            if(err) {
                                console.log(err);
                            }
                        }
                    )
                } else {
	        	    console.log("unknown eventType", data);
                }
	        })
        );
    }
}

export default Collector;
