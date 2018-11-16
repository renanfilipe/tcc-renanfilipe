import Collector from "./../imports/api/collector/collector"
import {Meteor} from 'meteor/meteor';
import {Tickers} from "../imports/api/mongo/collections";

const collector = new Collector();

Meteor.startup(() => {
    collector.start();

    Meteor.publish('tickerInfo', function (exchange, ticker) {
        return Tickers.find(
            {exchange: exchange, symbol: ticker},
            {fields: {price: 1, high: 1, low: 1, volume: 1, change: 1}}
        );
    });

    Meteor.publish('tickerList', function (exchange) {
        return Tickers.find(
            {exchange: exchange},
            {fields: {symbol: 1, price: 1, change: 1}}
        );
    });
});
