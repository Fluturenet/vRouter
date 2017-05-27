var ip = require("ip")

class Node {
    constructor (ipNum){
    this.ip=ipNum
    this.address = ip.fromLong(ipNum)
    }
}

module.exports= Node
