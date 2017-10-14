import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import Login from './containers/Login'

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
						<Scene key='login' component={Login} title='Login Page'  hideNavBar={true}/>
					</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}

export default App;