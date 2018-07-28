import React from 'react'
import styles from './styles.module.scss'

const text = {
  intro: {
    firstPerson: `Hi, I'm Brian Han, a front-end developer based in Austin, Texas.`,
    thirdPerson: `Brian Han is a front-end developer based in Austin, Texas.`,
  },
  about: `I build interfaces with web technologies , fix bugs, and refactor code. I've been working as developer for a few years now.`,
  currently: `These days, I'm working at Accenture Interactive collaborating with studios like Fjord and Intrepid helping clients build solutions using web technologies.`,
  previously: `Previously, I was at IBM where I helped start Carbon Design System as a core developer and contributor.`,
}

const HomePage = () => (
  <div className={styles.root}>
    <h1>{text.intro.thirdPerson}</h1>
    <p>{text.about}</p>
    <p>{text.currently}</p>
    <p>{text.previously}</p>
  </div>
)

export default HomePage
