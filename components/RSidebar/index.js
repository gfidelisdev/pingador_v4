import React from 'react'
import {PingEventsProvider} from '../../contexts/PingEventsProvider'
import NetworkPoinsDetails from '../NetworkPointDetails'

function RSidebar({children}) {
  return (
    <PingEventsProvider>
      <NetworkPoinsDetails  />
    </PingEventsProvider>
  )
}

export default RSidebar