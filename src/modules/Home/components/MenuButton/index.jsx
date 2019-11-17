import React from 'react';
import { Link } from "@reach/router";

import { Button } from './style'

export default function MenuButton(props) {
  const { url, text } = props

  return (
    <Link to={url}>
      <Button>{text}</Button>
    </Link>
  )
}