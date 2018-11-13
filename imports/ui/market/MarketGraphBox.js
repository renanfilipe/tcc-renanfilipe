import React from "react";
import {withStyles} from "@material-ui/core/styles";

class MarketGraphBox extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const {exchange, ticker} = this.props;

        new TradingView.widget(
            {
                "autosize": true,
                "symbol": `${exchange}:${ticker}`,
                "interval": "30",
                "timezone": "Etc/UTC",
                "theme": "Light",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "hide_side_toolbar": false,
                "container_id": "tradingview_50691"
            }
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div id="tradingview_50691" className={classes.container}></div>
        );
    }
}

const styles = {
    container: {
        maxWidth: 870,
        width: "100%",
        height: 454,
        boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12)",
    }
};

export default withStyles(styles)(MarketGraphBox);
