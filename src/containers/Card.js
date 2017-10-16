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

class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	componentWillMount() {
		
	}

	onContinue() {
		Actions.password();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.cardView}>
					<Image 
						source={cardIcon} 
						style={styles.cardIcon} 
					/>
				</View>
				<View style={styles.slide}>
					<Text style={styles.largeText}>
						Activate your
					</Text>
					<Text style={styles.largeText}>
						new card!
					</Text>
				</View>
				<TouchableOpacity style={styles.continue} onPress={()=> this.onContinue()}>
					<Text style={styles.continueText}>
						Continue
					</Text>
				</TouchableOpacity>
			</View>
		);
	}    
		
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F9FA',
		justifyContent: 'flex-end'
	},
	continue: {
		width: width - dynamicSize(20),
		height: dynamicSize(50),
		marginLeft: dynamicSize(10),
		backgroundColor: '#4072FF',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: dynamicSize(15),
		borderRadius: dynamicSize(2)
	},
	continueText: {
		color: 'white'
	},
	largeText: {
		fontSize: getFontSize(41),
		color: '#2B2C32',
		fontWeight: 'bold'
	},
	slide: {
		width: width - dynamicSize(20),
		marginLeft: dynamicSize(10),
		marginBottom: dynamicSize(90)
	},
	cardView: {
		width: width - dynamicSize(20),
		marginLeft: dynamicSize(10),
		marginBottom: dynamicSize(30)
	},
	cardIcon: {
		width: dynamicSize(200),
		height: dynamicSize(125),
		shadowColor: "rgba(0, 0, 0, 0.18)",
		shadowOffset: {
			width: 0,
			height: 16
		},
		shadowRadius: 18,
		shadowOpacity: 1
	}
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Card);
