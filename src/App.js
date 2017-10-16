import React, {Component} from 'react'
import {
	Text
} 
	from 'react-native'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import Login from './containers/Login'
import Card from './containers/Card'
import Password from './containers/Password'
import ActiveCard from './containers/ActiveCard'

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
							hideNavBar={false}
							titleStyle={{color: '#4072FF'}}
						/>
						<Scene 
							key='password' 
							component={Password} 
							title='Set Your Password'
							hideNavBar={false}
							back={true}
							titleStyle={{color: '#4072FF'}}
						/>
						<Scene 
							key='activeCard' 
							component={ActiveCard} 
							title='Active Card'
							hideNavBar={false}
							back={true}
							titleStyle={{color: '#4072FF'}}
						/>
					</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}

export default App;