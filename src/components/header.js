import React from 'react'
import { css } from 'glamor'

import avatar from '../images/nrkirby.jpg'

export default function Header() {

  return <div {...ContainerStyles}>
    <h1>Nick Kirby</h1>
    <img
      src={avatar}
      {...ImageStyles} />
    <h2>Software Developer</h2>
  </div>
}

const ContainerStyles = css({
  marginTop: 25,
  padding: '20px 0',
  color: '#f39c12',
  textAlign: 'center',
  height: '500px'
})

const ImageStyles = css({
  borderRadius: '50%',
  height: '150px',
  width: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '0',
  marginBottom: '20px'
})


