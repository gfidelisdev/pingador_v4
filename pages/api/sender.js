import socketClient from 'socket.io-client'
var socket = socketClient('http://localhost:8080')
console.log(socket)
const Sender = (req, res) => {
    socket.emit('olá')
    return res.send('oie')
}

export default Sender