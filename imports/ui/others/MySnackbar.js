import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class MySnackbar extends React.Component {
    state = {
        open: false,
        vertical: 'top',
        horizontal: 'left',
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </div>
        );
    }
}