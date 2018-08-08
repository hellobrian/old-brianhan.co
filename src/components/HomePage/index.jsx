import React from 'react'
import styles from './styles.module.css'

const links = {
  carbon: `http://www.carbondesignsystem.com/`,
}

const HomePage = () => (
  <div>
    <svg className={styles.circle} />
    <main className={styles.root}>
      <h1 className={styles.heading}>
        Brian Han is a front-end developer &mdash; building things for people on
        the internet.
      </h1>
      <div className={styles.paragraphList}>
        <p className={styles.paragraph}>
          I build websites, apps and the occasional API. I like to focus on
          design, code-quality and performance.
        </p>
        <p className={styles.paragraph}>
          Currently, I work at Accenture Interactive and collaborate with
          studios like Fjord and Intrepid Pursuits.
        </p>
        <p className={styles.paragraph}>
          Previously, I was at IBM working on{' '}
          <a className={styles.link} href={links.carbon}>
            Carbon
          </a>, an award-winning design system. I was a founding developer and
          core contributor.
        </p>
      </div>
    </main>
  </div>
)

export default HomePage
