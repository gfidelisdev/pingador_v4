import React from 'react'

import {Home, Notification,ChatOption} from 'grommet-icons'
import { Nav, Anchor } from 'grommet'

let Icons = {
  Home,
  Notification,
  ChatOption
}
function Navbar() {
  return (
    <div className='navbar bg-opacity-30 bg-green-900 rounded-box'>
      <div className="navbar-center mx-auto">
        <ul className="menu menu-horizontal">
          <li className="flex px-8 hover:bg-opacity-30 bg-opacity-0 bg-blue-800 rounded">Item 1</li>
          <li className="flex px-8 hover:bg-opacity-30 bg-opacity-0 bg-blue-800 rounded">Item 2</li>
          <li className="flex px-8 hover:bg-opacity-30 bg-opacity-0 bg-blue-800 rounded">Item 3</li>
          <li className="flex px-8 hover:bg-opacity-30 bg-opacity-0 bg-blue-800 rounded">Item 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar