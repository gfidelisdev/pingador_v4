import '../styles/globals.css'
import socketClient from 'socket.io-client'

function MyApp({ Component, pageProps }) {
  var socket = socketClient('http://localhost:8080')
  socket.on('connection', (msg) => {
    console.log(msg);
  })
  socket.emit('nuevo', 'ola socket')
  socket.on('db-save', msg =>{
    console.warn(msg)
  })
  return <Component {...pageProps} />
}

export default MyApp
