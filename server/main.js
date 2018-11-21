import Collector from "./../imports/api/collector/collector"
import {Meteor} from 'meteor/meteor';
import {Tickers, Balances, Orders} from "../imports/api/mongo/collections";

const collector = new Collector();

Meteor.startup(() => {
    collector.start();

    Meteor.publish('tickerInfo', function () {
        return Tickers.find();
    });

    Meteor.publish('tickerList', function (exchange) {
        return Tickers.find(
            {exchange: exchange},
            {fields: {symbol: 1, price: 1, change: 1}}
        );
    });

    Meteor.publish('balance', function () {
        return Balances.find();
    });

	Meteor.publish('orders', function () {
		return Orders.find();
	});
});
