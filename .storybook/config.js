import { configure, addDecorator } from '@storybook/react'
import StoryWrapper from './StoryWrapper'
import typography from '../src/typography'

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
configure(loadStories, module)
