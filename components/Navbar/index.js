import React from 'react'
import {Home, Notification,ChatOption} from 'grommet-icons'
import { Nav, Anchor } from 'grommet'
import Styles from '../styles/styles'

let Icons = {
  Home,
  Notification,
  ChatOption
}
let theme='dark'
let style = Styles(theme)

function Navbar() {

  return (
    <div className={`navbar bg-opacity-30 ${style.navbar} rounded-box mt-2`}>
      <div className="navbar-center mx-auto">
        <ul className="menu menu-horizontal">
          <li className={`flex px-8 hover:bg-opacity-30 bg-opacity-0 ${style.list} rounded`}>Item 1</li>
          <li className={`flex px-8 hover:bg-opacity-30 bg-opacity-0 ${style.list} rounded`}>Item 2</li>
          <li className={`flex px-8 hover:bg-opacity-30 bg-opacity-0 ${style.list} rounded`}>Item 3</li>
          <li className={`flex px-8 hover:bg-opacity-30 bg-opacity-0 ${style.list} rounded`}>Item 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar