import React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HelpOutline from "@material-ui/icons/HelpOutline";

const logo = "/images/whiteLogo.png";

class ButtonAppBar extends React.Component {
    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    renderFocusedButton = (buttonName) => {
        const currentUrl = this.props && this.props.match && this.props.match.url ? this.props.match.url : "";
        if (currentUrl.includes(buttonName)) {
            return {
                disabled: true,
                classes: {
                    disabled: this.props.classes.invertColor,
                }
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const isMenuOpen = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <img src={logo} className={classes.logo}/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Meta Exchange
                        </Typography>
                        <Button
                            {...this.renderFocusedButton("market")}
                            color="inherit"
                            href="/market"
                        >
                            Market
                        </Button>
                        <Button
                            {...this.renderFocusedButton("balance")}
                            color="inherit"
                            href="/balance"
                        >
                            Balance
                        </Button>
                        <Button
                            {...this.renderFocusedButton("orders")}
                            color="inherit"
                            href="/orders"
                        >
                            Orders
                        </Button>
                        <Button
                            {...this.renderFocusedButton("apikeys")}
                            color="inherit"
                            href="/apikeys"
                        >
                            API Keys
                        </Button>
                        <div>
                            <IconButton
                                {...this.renderFocusedButton("faq")}
                                color="inherit"
                            >
                                <HelpOutline/>
                            </IconButton>
                            <IconButton
                                aria-owns={open ? "menu-appbar" : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                {...this.renderFocusedButton("account")}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                open={isMenuOpen}
                                style={{marginTop: 30}}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styles = {
    root: {
        height: 62,
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        height: 40,
        marginRight: 10,
    },
    invertColor: {
        color: "#3f51b5 !important",
        backgroundColor: "white",
    },
};

export default withStyles(styles)(ButtonAppBar);
