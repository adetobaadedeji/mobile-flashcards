import React from 'react'
import { View } from 'react-native'
import { blue } from './styles/colors'
import reducer from './reducers'
import { CardStatusBar } from './components/CardStatusBar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setLocalNotification } from './utils/helpers'
import Nav from './components/Navigators'

const store = createStore(reducer)

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification()
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<CardStatusBar backgroundColor={blue} barStyle='light-content' />
					<Nav />
				</View>
			</Provider>
		)
	}
}
