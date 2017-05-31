var router = require("../index.js")
var node1 = router.newNode()
var node2 = router.newNode()

var socket1 = node1.createSocket('udp4')
socket1.bind(1234)
socket1.on("message",function(msg,rinfo){console.log(">",msg)})

var socket2 = node2.createSocket('udp4')
socket2.on("message",function(msg,rinfo){console.log("Talking to myself",rinfo.address,rinfo.port)})

socket2.send("IT WORKS!!",1234,"10.0.0.1")
socket2.send("IT WORKS!!",socket2.port,"10.0.0.2")
