import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import LinkListItem from './index';

const stories = storiesOf('LinkListItem', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <LinkListItem
    href={text('href', 'https://www.brianhan.co/')}
    text={text('text', 'brianhan.co')}
  />
));
