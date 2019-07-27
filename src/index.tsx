#!/usr/bin/env node
import React, { Component } from 'react'
import meow from 'meow'
import { render } from 'ink'
import App from './App'

const cli = meow(`
	Usage
	  $ cli-app-template

	Options
		--name  Your name

	Examples
	  $ cli-app-template --name=Jane
	  Hello, Jane
`)

render(<App flags={cli.flags} />)
