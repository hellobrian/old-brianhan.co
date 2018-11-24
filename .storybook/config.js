import { configure, addDecorator } from '@storybook/react'
import StoryWrapper from './StoryWrapper'
import { typography } from '../src/utils'

// automatically import all files in src ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)

// dynamically load stories
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// insert styles directly into the <head>
typography.injectStyles()

// wrap all stories with StoryWrapper
addDecorator(StoryWrapper)

// load stories
configure(loadStories, module)
