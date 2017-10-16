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

class Password extends Component {
	constructor(props) {
		super(props)
		this.state = {
			password: '',
			confirmPassword: ''	
		}
	}
	componentWillMount() {
		
	}
	
	render() {
		let {password, confirmPassword} = this.state
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
						onChangeText={text => this.setState(
						{
							password: text,
							confirmPassword: confirmPassword
						})}
					/>
				</View>
				<View style={styles.passwordView}>
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
						onChangeText={text => this.setState(
						{
							password: password,
							confirmPassword: text
						})}
					/>
				</View>
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
		height: dynamicSize(50),
		marginLeft: dynamicSize(10),
		marginTop: dynamicSize(30)
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
	}
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Password);
