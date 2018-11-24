import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LinkListItem from './index'

storiesOf('LinkListItem', module).add('default', () => (
  <LinkListItem href={'href'} text={'text'} />
))
