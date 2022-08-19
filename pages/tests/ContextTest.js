import React from 'react'
import ContextItemA from '../../components/Tests/ContextItemA'
import ContextItemB from '../../components/Tests/ContextItemB'
import {PingEventsProvider} from '../../contexts/PingEventsProvider'
function ContextTest() {
  return (
    <PingEventsProvider>
        <ContextItemA>
        </ContextItemA>
        <ContextItemB>
            
        </ContextItemB>
    </PingEventsProvider>
  )
}

export default ContextTest