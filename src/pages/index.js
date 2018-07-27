import React from 'react'
// import Link from 'gatsby-link'

const text = {
  intro: {
    firstPerson: `Hi, I'm Brian Han, a front-end developer based in Austin, Texas.`,
    thirdPerson: `Brian Han is a front-end developer based in Austin, Texas.`,
  },
  about: `I build interfaces, fix bugs, and refactor code. I've been working as developer for a few years now.`,
  currently: `These days, I'm working at Accenture Interactive collaborating with studios like Fjord and Intrepid helping clients build solutions using web technologies.`,
  previously: `Previously, I was at IBM where I helped start Carbon Design System as a core developer and contributor.`,
}

const IndexPage = () => (
  <div>
    <h1>{text.intro.thirdPerson}</h1>
    <p>{text.about}</p>
    <p>{text.currently}</p>
    <p>{text.previously}</p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
