const costPrice = document.querySelector(".boxCost");
const appleQuantity = document.querySelector(".appleBox")
const packetCreated = document.querySelector(".packetSize")
const profitPercentage = document.querySelector(".profit")
const packetsPossible = document.querySelector(".packetNumber")
const packetsDesired = document.querySelector(".packetNumber1")
const applePrice = document.querySelector(".applePrice")
const packetPrice = document.querySelector(".packetPrice")
const recommendedPrice = document.querySelector(".packetSold")
const calculateButton = document.querySelector(".button")

let applePlanner = applePacketPlanner()

packetsPossible.innerHTML = localStorage.getItem("Packet2") || 0;
applePrice.innerHTML = localStorage.getItem("Apple") || 0;
packetPrice.innerHTML = localStorage.getItem("Packet") || 0;
recommendedPrice.innerHTML = localStorage.getItem("RecommendedProfit") || 0;
packetsDesired.innerHTML = localStorage.getItem("Packet3") || 0


calculateButton.addEventListener("click",function(){
    var appleCost = applePlanner.costPricePerApple(costPrice.value,appleQuantity.value)
    var packetCost = applePlanner.costPricePerPacket(packetCreated.value,appleQuantity.value,costPrice.value,appleQuantity.value)
    var possiblePackets = applePlanner.packetsMade(costPrice.value,appleQuantity.value,)
    var recommendedCost = applePlanner.priceForPacket(appleQuantity.value,packetCreated.value,profitPercentage.value,costPrice.value)
    var desiredPackets = packetCreated.value;
    localStorage.setItem("Packet3",desiredPackets)
    localStorage.setItem("Apple",appleCost)
    localStorage.setItem("Packet",packetCost)
    localStorage.setItem("Packet2",possiblePackets)
    localStorage.setItem("RecommendedProfit",recommendedCost)
    packetsPossible.innerHTML = localStorage.getItem("Packet2")
    packetsDesired.innerHTML = localStorage.getItem("Packet3")
    applePrice.innerHTML = "R " + localStorage.getItem("Apple")
    packetPrice.innerHTML = "R " + localStorage.getItem("Packet")
    recommendedPrice.innerHTML = "R " + localStorage.getItem("RecommendedProfit")

})