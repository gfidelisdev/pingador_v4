import socketClient from 'socket.io-client'

function Sender() {
  var socket = socketClient('http://localhost:8080')
  socket.emit('olá socket')
  return (
    <>
        <div></div>
    </>
  )
}

export default Sender