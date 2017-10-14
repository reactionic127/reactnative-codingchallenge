import React, { Component } from 'react';
import {
	Alert,
	TextInput,
	View,
	Image,
	Text,
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Dimensions
} 
	from 'react-native';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window');

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	componentDidMount() {

	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.startView}>
					<Text style={styles.largeText}>
						Let’s get
					</Text>
					<Text style={styles.largeText}>
						started!
					</Text>
				</View>
			</View>
		);
	}    
		
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5D8DFD',
		alignItems: 'flex-start',
		justifyContent: 'flex-end'
	},
	startView: {

	},
	largeText: {
		fontSize: getFontSize(52),
		color: 'white'
	}
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Login);
