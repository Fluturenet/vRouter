var ip = require("ip")
var Node = require("./node.js")
var emitter = require("events").EventEmitter
var dgram = require("dgram")

class Router extends emitter{
    constructor(){
    super()
    this.first = ip.toLong("10.0.0.1")
    this.nodes =[]
    var fake = dgram.createSocket("udp4").bind()
    }

    newNode(){
    var node = new Node(this.first,this)
    this.first++
    this.nodes.push(node)
    return node
    }

    send(msg,offset,length,port,address,remote,rport){
    this.emit("newMessage",msg,offset,length,port,address,remote,rport)
    }
}

module.exports = Router
