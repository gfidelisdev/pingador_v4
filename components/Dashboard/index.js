import React from 'react'
import {PingEventsProvider} from '../../contexts/PingEventsProvider'

function Dashboard({children}) {
  return (
    <PingEventsProvider>
      <div className="m-4 p-4">
          {children}
      </div>
    </PingEventsProvider>
  )
}

export default Dashboard