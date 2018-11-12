import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import App from "../imports/api/app/App";

import "./main.html";

Meteor.startup(() => {
	ReactDOM.render(<App/>, document.getElementById("app"))
});

