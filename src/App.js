import React, {Component} from 'react'
import {
	Text,
	Image
} 
	from 'react-native'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Actions} from 'react-native-router-flux'
import reducer from './reducers'
import Login from './containers/Login'
import Card from './containers/Card'
import Password from './containers/Password'
import ActiveCard from './containers/ActiveCard'
import Notification from './containers/Notification'

const chevronIcon =  require('./images/chevron.png');
const closeIcon =  require('./images/close.png');

const RouterWithRedux = connect()(Router)
function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware
		),
	);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
	
	onLeft() {
		Actions.pop()
	}

	onRight() {
		Actions.pop()
	}
	
	render () {
		return (
			<Provider store={store}>
				<RouterWithRedux>
					<Scene key="root">
						<Scene 
							key='login' 
							component={Login} 
							title=''  
							hideNavBar={true}
						/>
            			<Scene 
							key='card' 
							component={Card} 
							title='Activate Card'  
							onLeft={this.onLeft.bind(this)}
							onRight={this.onRight.bind(this)}
							leftButtonImage={chevronIcon}
							leftButtonIconStyle= {{ width: 30, height: 30 }}
							rightButtonImage={closeIcon}
							rightButtonIconStyle= {{ width: 30, height: 30 }}
							titleStyle={{color: '#4072FF'}}
						/>
						<Scene 
							key='password' 
							component={Password} 
							title='Set Your Password'
							hideNavBar={false}
							onLeft={this.onLeft.bind(this)}
							onRight={this.onRight.bind(this)}
							leftButtonImage={chevronIcon}
							leftButtonIconStyle= {{ width: 30, height: 30 }}
							rightButtonImage={closeIcon}
							rightButtonIconStyle= {{ width: 30, height: 30 }}
							titleStyle={{color: '#4072FF'}}
						/>
						<Scene 
							key='activeCard' 
							component={ActiveCard} 
							title='Active Card'
							hideNavBar={false}
							onLeft={this.onLeft.bind(this)}
							onRight={this.onRight.bind(this)}
							leftButtonImage={chevronIcon}
							leftButtonIconStyle= {{ width: 30, height: 30 }}
							rightButtonImage={closeIcon}
							rightButtonIconStyle= {{ width: 30, height: 30 }}
							titleStyle={{color: '#4072FF'}}
						/>
						<Scene 
							key='notification' 
							component={Notification} 
							title='Push Notifications'
							hideNavBar={false}
							onLeft={this.onLeft.bind(this)}
							onRight={this.onRight.bind(this)}
							leftButtonImage={chevronIcon}
							leftButtonIconStyle= {{ width: 30, height: 30 }}
							rightButtonImage={closeIcon}
							rightButtonIconStyle= {{ width: 30, height: 30 }}
							titleStyle={{color: '#4072FF'}}
						/>
					</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}

export default App;