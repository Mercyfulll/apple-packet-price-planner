function applePacketPlanner(){

    function costPricePerApple(boxPrice,numApples){
        var costOfApple = boxPrice / numApples 
        return costOfApple.toFixed(2)
        
    } 
    function costPricePerPacket(packets, numApples, boxPrice){
        var price = (numApples/packets) * (boxPrice / numApples)
        return price.toFixed(2)

    }
    function packetsMade(boxPrice, numApples){
     var packets = numApples / (boxPrice / numApples)
     return packets.toFixed(1)

    } 
    function priceForPacket(numApples,packets, profit,boxPrice){
        var price = (numApples/packets) * (boxPrice / numApples)
        var recommendedPrice = price + (price * parseFloat(profit/100)) 
        return recommendedPrice.toFixed(2)

    }
    return{
        costPricePerApple,
        costPricePerPacket,
        packetsMade,
        priceForPacket
    }
}
