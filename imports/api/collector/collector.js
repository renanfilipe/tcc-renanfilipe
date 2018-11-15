import {Tickers} from "./../mongo/collections";
import {Meteor} from 'meteor/meteor';
import BinanceWS from "binance/lib/ws";

class Collector {
    constructor() {
        this.binanceWS = new BinanceWS(true);
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
                            high,
                            low,
                            change: priceChangePercent,
                            price: currentClose,
                            volume: quoteAssetVolume
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
    }
}

export default Collector;
