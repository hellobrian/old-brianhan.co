import React from 'react'
import styles from './styles.module.css'

const text = {
  name: `Brian Han is a front-end developer.`,
  about: `I build websites and apps with a focus on design, code quality and performance.`,
  started: `I started at IBM working on Carbon, an award-winning design system. I was a founding developer and core contributor.`,
  currently: `Currently, I work at Accenture Interactive and collaborate with studios like Fjord and Intrepid.`,
}

const links = {
  carbon: `http://www.carbondesignsystem.com/`,
}

const HomePage = () => (
  <div className={styles.root}>
    <h1 className={styles.heading}>{text.name}</h1>
    <p className={styles.paragraph}>{text.about}</p>
    <p className={styles.paragraph}>
      I started at <span className={styles.accent}>IBM</span> working on{' '}
      <a className={styles.link} href={links.carbon}>
        Carbon
      </a>, an award-winning design system. I was a founding developer and core
      contributor.
    </p>
    <p className={styles.paragraph}>{text.currently}</p>
  </div>
)

export default HomePage
