import React, { Component } from 'react';
import SnackBar from '../../ui/others/MySnackbar';

export const AppContext = React.createContext();

export default class AppStoreProvider extends Component {
	constructor(props) {
		super(props);
		this.children = props.children;
		this.state = {
			openSnackBar: false,
			snackBarMessage: '',
			variant: 'info',
		};
	}

	componentDidMount() {
		this.children = this.props.children;
	}

	componentWillReceiveProps(nextProps) {
		this.children = nextProps.children;
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
					snackBar: this.handleOpenSnackBar,
				}}
			>
				{this.children}
				<SnackBar
					variant={this.state.variant || 'info'}
					open={this.state.openSnackBar}
					onClose={this.handleCloseSnackBar}
					autoHideDuration={3000}
					message={<span id="message-id">{this.state.snackBarMessage}</span>}
				/>
			</AppContext.Provider>
		);
	}
}

