import React from 'react'
import styles from './styles.module.css'
import links from '../../constants/links'

const LinkList = () => (
  <>
    <ul className={styles.linkList}>
      <li>
        <a href={links.github} className={styles.link}>
          GitHub
        </a>
      </li>
      <li>
        <a href={links.linkedin} className={styles.link}>
          LinkedIn
        </a>
      </li>
    </ul>
    <ul className={styles.linkList}>
      <li>
        <a href={links.blog} className={styles.link}>
          Medium
        </a>
      </li>
      <li>
        <a href={links.email} className={styles.link}>
          thisisbrianhan@gmail.com
        </a>
      </li>
    </ul>
  </>
)

export default LinkList
