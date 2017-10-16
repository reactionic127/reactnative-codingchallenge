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
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')

class Password extends Component {
	constructor(props) {
		super(props)
		this.state = {
			password: '',
			confirmPassword: '',
			isLengthValid: false,
			isCapitalValid: false,
			isOneNumberValid: false,
			isMatched: false
		}
	}
	componentWillMount() {
		
	}
	
	onContinue() {
		Actions.activeCard()
	}

	hasUpperCase(str) {
		return (/[A-Z]/.test(str));
	}

	hasNumber(myString) {
		return /\d/.test(myString);
	}

	onPasswordValidation(text) {
		let {password, confirmPassword, isLengthValid, isCapitalValid, isOneNumberValid} = this.state
		this.setState({
			password: text,
			confirmPassword: confirmPassword
		})
		if(text.length > 7){
			this.setState({
				isLengthValid: true
			})	
		}else{
			this.setState({
				isLengthValid: false
			})	
		}
		if(this.hasUpperCase(text)) {
			this.setState({
				isCapitalValid: true
			})
		}else{
			this.setState({
				isCapitalValid: false
			})	
		}
		if(this.hasNumber(text)) {
			this.setState({
				isOneNumberValid: true
			})
		}else{
			this.setState({
				isOneNumberValid: false
			})	
		}
	}

	onConfirmPasswordValidation(text) {
		let {password, confirmPassword, isMatched} = this.state
		this.setState({
			password: password,
			confirmPassword: text
		})
		if(password !== '' && password === text) {
			this.setState({
				isMatched: true
			})
		}else {
			this.setState({
				isMatched: false
			})
		}
	}

	render() {
		let {password, confirmPassword, isLengthValid, isCapitalValid, isOneNumberValid, isMatched} = this.state
		return (
			<View style={styles.container}>
				<View style={styles.passwordView}>
					<Text style={styles.passwordText}>
						Password
					</Text>
					<TextInput 
						style={styles.passwordInput}
						placeholder="Password"
						size={14}
						autoCapitalize="none"
						value={password}
						ref='password'
						returnKeyType='next'
						secureTextEntry={true}
						onSubmitEditing={(event) => {
							this.refs.confirmPassword.focus();
						}}
						onChangeText={text => 
							this.onPasswordValidation(text)
						}
					/>
					<View style={styles.validTextView}>
						<Icon name="check" size={12} color={isLengthValid ? '#4072ff' : '#8c95a4'}/>
						<Text style={{fontSize: 14, lineHeight: 24.0, color: isLengthValid ? "#4072ff" : "#8c95a4", marginLeft: 10}}>
							8 characters
						</Text>
					</View>
					<View style={styles.validTextView}>
						<Icon name="check" size={12} color={isCapitalValid ? '#4072ff' : '#8c95a4'}/>
						<Text style={{fontSize: 14, lineHeight: 24.0, color: isCapitalValid ? "#4072ff" : "#8c95a4", marginLeft: 10}}>
							Capital letter
						</Text>
					</View>
					<View style={styles.validTextView}>
						<Icon name="check" size={12} color={isOneNumberValid ? '#4072ff' : '#8c95a4'}/>
						<Text style={{fontSize: 14, lineHeight: 24.0, color: isOneNumberValid ? "#4072ff" : "#8c95a4", marginLeft: 10}}>
							One number
						</Text>
					</View>
				</View>
				<View style={styles.confirmPasswordView}>
					<Text style={styles.passwordText}>
						Confirm new password
					</Text>
					<TextInput 
						style={styles.passwordInput}
						placeholder="Confirm Password" 
						size={14}
						autoCapitalize="none"
						value={confirmPassword}
						ref='confirmPassword'
						returnKeyType='next'
						secureTextEntry={true}
						onSubmitEditing={(event) => {
							
						}}
						onChangeText={text => 
							this.onConfirmPasswordValidation(text)
						}
					/>
					<View style={styles.matchParentView}>
						{isMatched &&
							<View style={styles.matchedView}>
								<Icon name="check" size={12} color={isMatched ? '#7ac143' : '#8c95a4'}/>
								<Text style={{fontSize: 14, lineHeight: 24.0, color: isMatched ? "#7ac143" : "#8c95a4", marginLeft: 10}}>
									Match!
								</Text>
							</View>
						}
					</View>
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
		backgroundColor: '#F8F9FA'
	},
	passwordView: {
		width: width - dynamicSize(20),
		marginLeft: dynamicSize(10),
		marginTop: dynamicSize(10)
	},
	confirmPasswordView: {
		width: width - dynamicSize(20),
		marginLeft: dynamicSize(10),
		marginTop: dynamicSize(10)
	},
	passwordText: {
		fontSize: getFontSize(13),
		color: "#8c95a4",
		opacity: 0.6
	},
	passwordInput: {
        fontSize: getFontSize(14),
        color: 'black',
        width: width - dynamicSize(20),
        height: dynamicSize(50),
		justifyContent: 'center',
		borderBottomWidth: 1,
		opacity: 0.3,
		borderColor: "#8c95a4"
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
	validTextView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: dynamicSize(5)
	},
	matchParentView: {
		height: dynamicSize(40)
	},
	matchedView: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Password);
