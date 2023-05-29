const costPrice = document.querySelector(".boxCost");
const appleQuantity = document.querySelector(".appleBox")
const packetCreated = document.querySelector(".packetSize")
const profitPercentage = document.querySelector(".profit")
const packetsPossible = document.querySelector(".packetNumber")
const applePrice = document.querySelector(".applePrice")
const packetPrice = document.querySelector(".packetPrice")
const recommendedPrice = document.querySelector(".packetSold")
const calculateButton = document.querySelector(".button")

let applePlanner = applePacketPlanner()

packetsPossible.innerHTML = localStorage.getItem("Packet2") || 0;
applePrice.innerHTML = localStorage.getItem("Apple") || 0;
packetPrice.innerHTML = localStorage.getItem("Packet") || 0;
recommendedPrice.innerHTML = localStorage.getItem("RecommendedProfit") || 0;


calculateButton.addEventListener("click",function(){
    var appleCost = applePlanner.costPricePerApple(costPrice.value,appleQuantity.value)
    var packetCost = applePlanner.costPricePerPacket(packetCreated.value,appleQuantity.value,costPrice.value,appleQuantity.value)
    var possiblePackets = applePlanner.packetsMade(costPrice.value,appleQuantity.value,)
    var recommendedCost = applePlanner.priceForPacket(appleQuantity.value,packetCreated.value,profitPercentage.value,costPrice.value)//numApples,packets, profit,boxPrice,numApples)
    localStorage.setItem("Apple",appleCost)
    localStorage.setItem("Packet",packetCost)
    localStorage.setItem("Packet2",possiblePackets)
    localStorage.setItem("RecommendedProfit",recommendedCost)
    packetsPossible.innerHTML = localStorage.getItem("Packet2")
    applePrice.innerHTML = localStorage.getItem("Apple")
    packetPrice.innerHTML = localStorage.getItem("Packet")
    recommendedPrice.innerHTML = localStorage.getItem("RecommendedProfit")

})