import React from 'react'
import {PingEventsProvider} from '../../contexts/PingEventsProvider'
import NetworkPointDetails from '../NetworkPointDetails'

function RSidebar({children}) {
  return (
    <PingEventsProvider>
      <NetworkPointDetails  />
    </PingEventsProvider>
  )
}

export default RSidebar