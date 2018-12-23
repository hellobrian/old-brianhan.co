import React from 'react';
import Layout from 'src/components/Layout/';
import StyledLink from 'src/components/StyledLink';
import { LINKS } from 'src/utils';

const About = () => (
  <Layout>
    <p>
      I build websites and apps but mainly my focus is on building interfaces
      &mdash; UI should look good, feel good, and deliver the best possible
      experience for people using it. Sure, I can build an API or tinker with
      some middleware but my jam is all about the clicky, touchy, visual parts
      of the web.
    </p>
    <p>
      Currently, I work at Accenture Interactive and collaborate with other
      designers and devs at studios like Fjord and Intrepid Pursuits.
    </p>
    <p>
      Previously, I was at IBM working on{' '}
      <StyledLink href={LINKS.carbon}>Carbon</StyledLink>, an award-winning
      open-source design system. I was one of the first developers to work on it
      and maintained it with an amazing team of designers and devs for most of
      my career at IBM.
    </p>
    <p>
      A little more about me: I was born and raised in Toronto, Canada. These
      days I am working and living in Austin, Texas. You can find me enjoying
      stuff like{' '}
      <span
        role="img"
        aria-label="Stuff that Brian enjoys: ramen, sushi, tacos, and coffee">
        🍜 🍣 🌮 ☕️
      </span>
    </p>
  </Layout>
);

export default About;
