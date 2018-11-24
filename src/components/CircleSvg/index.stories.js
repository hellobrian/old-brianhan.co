import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CircleSvg from './index'

const stories = storiesOf('CircleSvg', module)
stories.addDecorator(withKnobs)
stories.add('default', () => <CircleSvg />)
