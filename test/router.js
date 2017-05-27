var assert = require("assert")
var Router = require("../lib/router")

describe('Router',function(){
    describe('#newNode()',function(){
        it('Should return a new Node with ip:10.0.0.1',function(){
            var router = new Router()
            var node = router.newNode()
            assert.equal(node.address,"10.0.0.1")
        })
    })
})
