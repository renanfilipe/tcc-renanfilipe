import React, { Component } from 'react';
import Snackbar from '../ui/others/MySnackbar';

export const AppContext = React.createContext();

export default class AppStoreProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openSnackBar: false,
			snackBarMessage: '',
			variant: 'info',
		};
	}

	handleOpenSnackBar = (message, variant = 'info') => {
		this.setState({ openSnackBar: true, snackBarMessage: message, variant });
	};

	handleCloseSnackBar = () => {
		this.setState({ openSnackBar: false });
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					openSnackBar: this.handleOpenSnackBar,
				}}
			>
				<Snackbar
					variant={this.state.variant || 'primary'}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={this.state.openSnackBar}
					onClose={this.handleCloseSnackBar}
					autoHideDuration={3000}
					message={<span id="message-id">{this.state.snackBarMessage}</span>}
				/>
			</AppContext.Provider>
		);
	}
}

