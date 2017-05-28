var ip = require("ip")
var Udp = require('./udp')

class Node {
    constructor (ipNum,router){
    this.ip=ipNum
    this.router = router
    this.address = ip.fromLong(ipNum)
    this.socks=[]
    }

    createSocket(type){
    var udp = new Udp(this,this.router)
    this.socks.push(udp)
    return udp
    }
}

module.exports= Node
