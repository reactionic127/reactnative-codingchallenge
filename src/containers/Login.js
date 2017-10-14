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
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel'
import { ActionCreators } from '../actions'
import { dynamicSize, getFontSize } from '../utils/DynamicSize'

const {height, width} = Dimensions.get('window')
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const SLIDER_1_FIRST_ITEM = 1;

export const ENTRIES = [
    {
        title: "Let's get started",
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/UYiroysl.jpg'
	},
	{
        title: "Page 2",
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/UYiroysl.jpg'
	},
	{
        title: "Page 3",
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/UYiroysl.jpg'
    }
];

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
			slider1Ref: null
		}
	}
	componentDidMount() {

	}

	onLogin() {

	}
	
	_renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
				<Text style={styles.largeText}>
					Let’s get
				</Text>
				<Text style={styles.largeText}>
					started!
				</Text>
			</View>
        );
	}
	
	render() {
		const { slider1ActiveSlide, slider1Ref } = this.state;
		return (
			<View style={styles.container}>
				<Carousel
					data={ENTRIES}
					renderItem={this._renderItem}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
				/>
				<Pagination
					dotsLength={ENTRIES.length}
					activeDotIndex={slider1ActiveSlide}
					containerStyle={styles.paginationContainer}
					dotColor={'rgba(255, 255, 255, 0.92)'}
					dotStyle={styles.paginationDot}
					inactiveDotColor={'black'}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
					carouselRef={slider1Ref}
					tappableDots={!!slider1Ref}
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
	},
	paginationContainer: {
        paddingVertical: dynamicSize(8)
    },
	imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    imageContainerEven: {
        backgroundColor: 'black'
    },
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}


export default connect(() => {return {}}, mapDispatchToProps)(Login);
