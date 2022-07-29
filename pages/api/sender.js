import socketClient from 'socket.io-client'
var socket = socketClient('http://10.4.7.61:8080')
console.log(socket)
const Sender = (req, res) => {
    socket.emit('nuevo','olá')
    return res.send('oie')
}

export default Sender