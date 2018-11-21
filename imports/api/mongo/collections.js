import {Mongo} from "meteor/mongo";

export const Tickers = new Mongo.Collection('tickers');
export const Orders = new Mongo.Collection('orders');
export const Balances = new Mongo.Collection('balance');
