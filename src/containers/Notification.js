import React, { Component } from 'react'
import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
	Switch,
	ScrollView
} 
	from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')

class Notification extends Component {
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
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.panelView}>
					<View style={styles.titleView}>
						<View style={styles.leftView}>
							<View style={styles.appIcon}/>
							<Text style={styles.labelText}>
								App name
							</Text>
						</View>
						<View style={styles.rightView}>
							<Text style={styles.timeText}>
								now
							</Text>
						</View>
					</View>
					<View style={styles.titleView}>
						<Text style={styles.confirmText}>
							New transactions completed
						</Text>
					</View>
					<View style={styles.titleView}>
						<Text style={styles.descText}>
							Startbucks - $4.50
						</Text>
					</View>
				</View>
				<View style={styles.grayView}>
					<Text style={styles.grayText}>
						New transactions completed
					</Text>
					<Text style={styles.graydescText}>
						Startbucks - $4.50
					</Text>
				</View>
				<View style={styles.grayView}>
					<Text style={styles.lightgrayText}>
						New transactions completed
					</Text>
					<Text style={styles.lightgraydescText}>
						Startbucks - $4.50
					</Text>
				</View>
				<View style={styles.notifyView}>
					<Text style={styles.notifyText}>
						Please enable push notifications
					</Text>
				</View>
				<View style={styles.labelView}>
					<Text style={styles.labelText}>
						Please set the PIN for your new card. Remember to always keep your PIN private and do not share the number with anyone
					</Text>
				</View>
				<TouchableOpacity style={styles.continue} onPress={()=> this.onContinue()}>
					<Text style={styles.continueText}>
						Allow push notifications
					</Text>
				</TouchableOpacity>
				<View style={styles.later} onPress={()=> this.onContinue()}>
					<TouchableOpacity>
						<Text style={styles.laterText}>
							Remind me later
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}    
		
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F9FA',
	},
	panelView: {
		width: width-dynamicSize(50),
		height: dynamicSize(93),
		marginTop: dynamicSize(30),
		marginLeft: dynamicSize(25),
		opacity: 0.9,
		borderRadius: 6,
		backgroundColor: "#ffffff"
	},
	titleView: {
		width: width-dynamicSize(50),
		height: dynamicSize(35),
		borderRadius: 6,
		backgroundColor: "#ffffff",
		flexDirection: 'row',
		alignItems: 'center'
	},
	grayView: {
		width: width-dynamicSize(80),
		marginTop: dynamicSize(20),
		marginLeft: dynamicSize(40),
		backgroundColor: "#F8F9FA",
	},
	leftView: {
		width: (width-dynamicSize(50))/2,
		height: dynamicSize(35),
		borderRadius: 6,
		backgroundColor: "#ffffff",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	rightView: {
		width: (width-dynamicSize(50))/2,
		height: dynamicSize(35),
		borderRadius: 6,
		backgroundColor: "#ffffff",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	appIcon: {
		width: dynamicSize(20),
		height: dynamicSize(20),
		borderRadius: 4.5,
		backgroundColor: "#4072ff",
		marginLeft: dynamicSize(10),
	},
	labelText: {
		opacity: 0.9,
		fontSize: 13,
		fontWeight: "300",
		letterSpacing: -0.08,
		color: "#000000",
		marginLeft: dynamicSize(10)
	},
	timeText: {
		opacity: 0.9,
		fontSize: 13,
		fontWeight: "300",
		letterSpacing: -0.08,
		color: "#000000",
		marginRight: dynamicSize(10)
	},
	confirmText: {
		opacity: 0.9,
		fontSize: 15,
		fontWeight: "500",
		color: "#000000",
		marginLeft: dynamicSize(15)
	},
	descText: {
		opacity: 0.9,
		fontSize: 15,
		color: "#000000",
		marginLeft: dynamicSize(15)
	},
	grayText: {
		opacity: 0.4,
		fontSize: 15,
		fontWeight: "500",
		color: "#000000"
	},
	graydescText: {
		opacity: 0.4,
		fontSize: 15,
		color: "#000000"
	},
	lightgrayText: {
		opacity: 0.2,
		fontSize: 15,
		fontWeight: "500",
		color: "#000000"
	},
	lightgraydescText: {
		opacity: 0.2,
		fontSize: 15,
		color: "#000000"
	},
	notifyView: {
		width: width-dynamicSize(50),
		marginTop: dynamicSize(30),
		marginLeft: dynamicSize(25),
	},
	notifyText: {
		fontSize: getFontSize(35),
		fontWeight: "900",
		lineHeight: 48.0,
		letterSpacing: -0.35,
		color: "#2b2c32"
	},
	labelView: {
		width: width - dynamicSize(50),
		marginLeft: dynamicSize(25),
		marginTop: dynamicSize(10)
	},
	labelText: {
		fontSize: getFontSize(16),
		lineHeight: 32.0,
		color: "#2b2c32"
	},
	continue: {
		width: width - dynamicSize(20),
		height: dynamicSize(50),
		marginLeft: dynamicSize(10),
		backgroundColor: '#4072FF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: dynamicSize(20),
		borderRadius: dynamicSize(2)
	},
	continueText: {
		color: 'white'
	},
	later: {
		width: width - dynamicSize(20),
		marginLeft: dynamicSize(10),
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: dynamicSize(20)
	},
	laterText: {
		fontSize: 14,
		lineHeight: 24.0,
		color: "#8c95a4",
		textDecorationLine: 'underline'
	},
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Notification);
