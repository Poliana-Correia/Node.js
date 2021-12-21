const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi vc:', message)          //ouvindo eventos
})                                              

ev.emit('saySomething', "Poly")   //emitindo eventos, sempre que disparados se estiver on iremos ouvilos
ev.emit('saySomething', "João")
ev.emit('saySomething', "Deive")

// OBS: ON (ouvir sempre)
//      ONCE (ouvir uma única vez)