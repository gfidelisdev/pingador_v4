import React from 'react'

function NetworkPointView({network_point}) {

    function getLastNresults(){

    }
    
  return (
    <div className={`min-w-12 max-w[20%] w-4/12 h-12 border-solid border-2 m-2 bg-success-content`}>
        {network_point.name}
    </div>
  )
}

export default NetworkPointView