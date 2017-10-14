import React, { Component } from 'react'
import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} 
	from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Carousel from 'react-native-snap-carousel'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	componentDidMount() {

	}

	onLogin() {

	}
	
	_renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
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
				<Carousel
					ref={(c) => { this._carousel = c; }}
					data={this.state.entries}
					renderItem={this._renderItem}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
				/>
				<View style={styles.buttonView}>
					<TouchableOpacity style={styles.login} onPress={()=> this.onLogin()}>
						<Text style={styles.loginText}>
							Log in
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.signup} onPress={()=> this.onLogin()}>
						<Text style={styles.loginText}>
							Sign up
						</Text>
					</TouchableOpacity>
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
		color: 'white',
		paddingLeft: dynamicSize(20)
	},
	buttonView: {
		width: width,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	login: {
		width: dynamicSize(155),
		height: dynamicSize(54),
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginText: {
		fontSize: getFontSize(16),
		color: '#4072FF',
	},
	signup: {
		width: dynamicSize(155),
		height: dynamicSize(54),
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: dynamicSize(20)
	},
	slide: {
        width: itemWidth,
        height: itemHeight
    }
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Login);
