import React from 'react'
import {
  HomePageRoot,
  CircleSvg,
  Main,
  H1,
  NameSpan,
  Paragraph,
} from './styled'
import LinkList from '../LinkList'
import LinkListItem from '../LinkListItem'
import links from '../../constants/links'

export default () => (
  <HomePageRoot>
    <CircleSvg />
    <Main>
      <H1>
        <NameSpan>Brian Han</NameSpan> is a front-end developer &mdash; building
        things for people on the internet.
      </H1>

      <div>
        <Paragraph>
          I build websites and apps but mainly my focus is on building
          interfaces &mdash; UI should look good, feel good, and deliver the
          best possible experience for people using it. Sure, I can build an API
          or tinker with some middleware but my jam is all about the clicky,
          touchy, visual parts of the web.
        </Paragraph>
        <Paragraph>
          Currently, I work at Accenture Interactive and collaborate with other
          designers and devs at studios like Fjord and Intrepid Pursuits.
        </Paragraph>
        <Paragraph>
          Previously, I was at IBM working on{' '}
          <LinkListItem href={links.carbon} text={'Carbon'} />, an award-winning
          open-source design system. I was one of the first developers to work
          on it and maintained it with an amazing team of designers and devs for
          most of my career at IBM.
        </Paragraph>
        <Paragraph>
          A little more about me: I was born and raised in Toronto, Canada.
          These days I'm working and living in Austin, Texas with a modest
          collection of succulents and houseplants (it's the Texas way I
          suppose). You can find me enjoying stuff like{' '}
          <span
            role="img"
            aria-label="Stuff that Brian enjoys: ramen, sushi, tacos, and coffee"
          >
            🍜 🍣 🌮 ☕️
          </span>
        </Paragraph>
      </div>
      <LinkList />
    </Main>
  </HomePageRoot>
)
