'use strict'
import React, { Component } from 'react'
import { Text, Color } from 'ink'

interface IProps {
	flags: any
}
interface IState {}

class App extends React.Component<IProps, IState> {
	render() {
		const { name } = this.props.flags
		return (
			<Text>
				Hello, <Color green>{name || 'Alireza'}</Color>
			</Text>
		)
	}
}

export default App
