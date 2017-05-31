var emitter = require("events").EventEmitter
var ip = require("ip")

class Udp extends emitter{
    constructor(node,router){
    super()
    this.node =node
    this.router=router
    this.bound = false
    this.port= Math.floor(Math.random() * (65535 - 1025) + 1025)
    this.router.on(this.node.address,
        (msg,offset,length,port,address,remote,rport)=>{
        this._onMessage(msg,offset,length,port,address,remote,rport)
        }
    )
    }

    bind(port,cb){
        this.port = port
        this.emit("listening")
        if(!!cb) cb()
        //console.log("port: "+port)
    }

    send (msg,offset,length,port,address,callback){
        if(!msg) {this.emit("error","no Message"); return}
        if(!port) { this.send(msg,0,msg.length,offset,length,port,callback); return}
        if(!address) {this.send(msg,offset,length,port,this.node.address,callback);return}
        if(!callback) callback= function(){}
        this.router.send(msg,offset,length,port,address,this.node.address,this.port)
    }

    _onMessage(msg,offset,length,port,address,remote,rport){
        //console.log(">",this.node.address,msg,offset,length,port,address,remote,rport)
        if(port==this.port && ip.isEqual(address,this.node.address)){
            this.emit("message",msg,{address:remote,family:"IPv4",port:rport,size:msg.length})
        }
    }

    address(){
    return {address:this.node.address,port:this.port,family:'udp4'}
    }
}

module.exports = Udp
