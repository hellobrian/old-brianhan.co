import React from 'react'
import SEO from '../SEO'
import './index.css'

export default ({ children }) => (
  <>
    <SEO />
    <div>{children}</div>
  </>
)
