describe("Test the costPerApplePrice function",function(){

    it("It should calculate price per apple ",function(){
       
        let apple = applePacketPlanner()
        apple.costPricePerApple(78,24)
        
        assert.equal(3.25,apple.costPricePerApple(78,24))
    })

    it("It should calculate how many packets of apples can be made",function(){
       
        let apple = applePacketPlanner()
        apple.packetsMade(78,24)
        
        assert.equal(7.4,apple.packetsMade(78,24))
    })

    it("It should be able to calculate the cost price for a packet",function(){
       
        let apple = applePacketPlanner()
    
        apple.costPricePerPacket(7.4,24,78)
        
        assert.equal(10.54,apple.costPricePerPacket(7.4,24,78))
    })

    it("It should be able to calculate the recommended price price for a packet",function(){
       
        let apple = applePacketPlanner()
        apple.priceForPacket(24,7.4,34,78)
        
        assert.equal(14.12,apple.priceForPacket(24,7.4,34,78))
    })

})