'use strict';
import React, {Component} from 'react'
import {Text, Color} from 'ink'

interface IProps {
	flags: any
}
interface IState {}

class App extends React.Component<IProps, IState> {
	render () {
		return (<Text>
			Hello, <Color green>Alireza</Color>
		</Text>)
	}
}

export default App
