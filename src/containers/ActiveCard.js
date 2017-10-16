import React, { Component } from 'react'
import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image
} 
	from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')
const cardIcon =  require('../images/credit.png');

class ActiveCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	componentWillMount() {
		
	}

	onContinue() {
		
	}

	render() {
		return (
			<View style={styles.container}>
				
			</View>
		);
	}    
		
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F9FA',
	},
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(ActiveCard);
