import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import BlogCard from './index';

const stories = storiesOf('BlogCard', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <BlogCard
    title={text('title', 'Adopting Prettier Early at Work')}
    fromNow={text('fromNow', '5 days ago')}
    excerpt={text('excerpt', excerpt)}
  />
));

const excerpt = `These days you can easily create an online resume or 
portfolio using just some HTML templates. With a little CSS and JS you can style your text, 
add interactive charts or display your previous works in a professional way.`;
