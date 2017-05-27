# vRouter
Virtual IP Router for NodeJs and Javascript.

Sometimes, when you are working at a networking projects, You may need to test it in a  environment with hundred of nodes communicating each other.

With **newNode** you get a new virtual node starting from the ip `10.0.0.1`
This modules is a drop in replacement of the datagaram one.


usage
---
``` javascript
var router = require("vrouter")
var node1 = router.newNode()
var node2 = router.newNode()

var socket1 = node1.createSocket('udp4')
socket1.bind(1234)
socket1.on("message",(msg,rinfo)=> console.log(msg))

var socket2 = node2.createSocket('udp4')

socket2.send("test",1234,"10.0.0.1")
