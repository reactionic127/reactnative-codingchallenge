import React, { Component } from 'react'
import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
	Switch
} 
	from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')

class ActiveCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			onePinCode: '',
			twoPinCode: '',
			threePinCode: '',
			fourPinCode: ''
		}
	}
	componentWillMount() {
		
	}

	onContinue() {
		Actions.notification()	
	}

	render() {
		let {onePinCode, twoPinCode, threePinCode, fourPinCode} = this.state
		return (
			<View style={styles.container}>
				<View style={styles.labelView}>
					<Text style={styles.labelText}>
						Please set the PIN for your new card. Remember to always keep your PIN private and do not share the number with anyone
					</Text>
				</View>
				<View style={styles.pinView}>
					<TextInput 
						style={styles.pinCodeTextInput}
						size={14}
						autoCapitalize="none"
						value={onePinCode}
						ref='onePinCode'
						returnKeyType='next'
						secureTextEntry={true}
						keyboardType='number-pad'
						maxLength={1}
						onSubmitEditing={(event) => {
							this.refs.twoPinCode.focus();
						}}
						onChangeText={text => this.setState(
						{
							onePinCode: text,
							twoPinCode: twoPinCode,
							threePinCode: threePinCode,
							fourPinCode: threePinCode
						})}
					/>
					<TextInput 
						style={styles.centerPinCodeTextInput}
						size={14}
						autoCapitalize="none"
						value={twoPinCode}
						ref='twoPinCode'
						returnKeyType='next'
						secureTextEntry={true}
						keyboardType='number-pad'
						maxLength={1}
						onSubmitEditing={(event) => {
							this.refs.threePinCode.focus();
						}}
						onChangeText={text => this.setState(
						{
							onePinCode: onePinCode,
							twoPinCode: text,
							threePinCode: threePinCode,
							fourPinCode: threePinCode
						})}
					/>
					<TextInput 
						style={styles.centerPinCodeTextInput}
						size={14}
						autoCapitalize="none"
						value={threePinCode}
						ref='threePinCode'
						returnKeyType='next'
						secureTextEntry={true}
						keyboardType='number-pad'
						maxLength={1}
						onSubmitEditing={(event) => {
							this.refs.fourPinCode.focus();
						}}
						onChangeText={text => this.setState(
						{
							onePinCode: onePinCode,
							twoPinCode: twoPinCode,
							threePinCode: text,
							fourPinCode: threePinCode
						})}
					/>
					<TextInput 
						style={styles.centerPinCodeTextInput}
						size={14}
						autoCapitalize="none"
						value={fourPinCode}
						ref='fourPinCode'
						returnKeyType='next'
						secureTextEntry={true}
						keyboardType='number-pad'
						maxLength={1}
						onSubmitEditing={(event) => {
							
						}}
						onChangeText={text => this.setState(
						{
							onePinCode: onePinCode,
							twoPinCode: twoPinCode,
							threePinCode: threePinCode,
							fourPinCode: text
						})}
					/>
				</View>
				<View style={styles.toggleView}>
					<Switch/>
					<Text style={styles.pinText}>
						Keep my existing PIN
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
	},
	labelView: {
		width: width - dynamicSize(46),
		marginLeft: dynamicSize(23),
		marginTop: dynamicSize(10)
	},
	labelText: {
		fontSize: getFontSize(18),
		fontWeight: "bold",
		lineHeight: 32.0,
		color: "#2b2c32"
	},
	pinView: {
		width: width - dynamicSize(46),
		marginLeft: dynamicSize(23),
		marginTop: dynamicSize(10),
		flexDirection: 'row'
	},
	pinCodeTextInput: {
		width: dynamicSize(82),
		height: dynamicSize(70),
		opacity: 0.7,
		borderRadius: 2,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#d9dee5",
		textAlign: 'center',
		color: '#8c95a4'
	},
	centerPinCodeTextInput: {
		width: dynamicSize(82),
		height: dynamicSize(70),
		opacity: 0.7,
		borderRadius: 2,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftWidth: 0,
		borderColor: "#d9dee5",
		textAlign: 'center',
		color: '#8c95a4'
	},
	toggleView: {
		width: width - dynamicSize(46),
		marginLeft: dynamicSize(23),
		marginTop: dynamicSize(20),
		flexDirection: 'row',
		alignItems: 'center'
	},
	pinText: {
		fontSize: getFontSize(14),
		color: "#2b2c32",
		marginLeft: dynamicSize(10)
	},
	continue: {
		width: width - dynamicSize(20),
		height: dynamicSize(50),
		marginLeft: dynamicSize(10),
		backgroundColor: '#4072FF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: dynamicSize(50),
		borderRadius: dynamicSize(2)
	},
	continueText: {
		color: 'white'
	},
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(ActiveCard);
