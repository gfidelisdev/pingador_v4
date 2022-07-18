import React from 'react'

import {Home, Notification,ChatOption} from 'grommet-icons'
import { Nav, Anchor } from 'grommet'

let Icons = {
  Home,
  Notification,
  ChatOption
}
console.log(Icons)
function Navbar() {
  return (
    <>
    <Nav direction="row" background="brand" pad="medium" className="flex justify-center">
      <Anchor icon={<Icons.Home />} hoverIndicator />
      <Anchor icon={<Icons.Notification />} hoverIndicator />
      <Anchor icon={<Icons.ChatOption />} hoverIndicator />
    </Nav>
    </>
  )
}

export default Navbar