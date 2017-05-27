var ip = require("ip")
var Node = require("./node.js")

class Router {
    constructor(){
    this.first = ip.toLong("10.0.0.1")
    this.nodes =[]
    }
    
    newNode(){
    var node = new Node(this.first)
    this.first++
    this.push(node)
    return node
    }
}

module.exports = Router
