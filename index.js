
let cards = [] //array 
//console.log(cards.length) 
let sum = 0 
let hasBlackJack = false
let isAlive = false 
let message = ""
let checksum = false 
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")


let startchips = false
let names = "balance"
let startless21 = false 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10 
    }else if(randomNumber === 1){
        return 11 
    }else{
        return randomNumber
    }
}
//console.log(cards)

if(startchips === false){
    chips = 0
    PlayTime = 0 
}
document.getElementById("primary3").disabled = true 
function startGame(){
    isAlive = true
    startless21 = false
    startchips = true
    document.getElementById("primary1").disabled = true
    document.getElementById("primary2").disabled = false  
    document.getElementById("primary3").disabled = false  
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    PlayTime += 1
    if(startless21 === true){
        chips -= 5
    }
    renderGame()
}

function restartGame(){
    document.getElementById("primary1").disabled = false 
    document.getElementById("primary3").disabled = true 
    document.getElementById("primary2").disabled = true 
    if(startless21 === true){
        chips -= 5
        startless21 = false
    }
    cardEl.textContent = " "
    sumEl.textContent = "Sum: "
    TimePlayerEl.textContent = "Round " + PlayTime + " [SURRENDER $-5]"
    playerEl.textContent = names + ": $" + chips 
    //renderGame()
}

function renderGame(){
    document.getElementById("primary3").disabled = true 
    hasBlackJack = false
    cardEl.textContent = " "  
    for(let i=0; i<cards.length; i++){
        var img = document.createElement('img')
        //cardEl.textContent += cards[i] + " "
        switch(cards[i]){
            case 2:
               img.src = '2.png' 
               break;
            case 3:
               img.src = '3.png' 
               break;
            case 4:
               img.src = '4.png' 
               break;
            case 5:
               img.src = '5.png' 
               break;
            case 6:
               img.src = '6.png' 
               break;
            case 7:
               img.src = '7.png' 
               break;
            case 8:
               img.src = '8.png' 
               break;
            case 9:
               img.src = '9.png' 
               break;
            case 10:
               img.src = '10.png' 
               break;
            case 11:
               img.src = 'A1.png' 
               break;
        }
        cardEl.appendChild(img).style.width = "100px";
    }
    /*let player = {
        name: "balance",
    }*/

    // render out ALL the cards we have
    sumEl.textContent  = "Sum: " + sum
    if (sum <= 20) {
        document.getElementById("primary3").disabled = false 
        startless21 = true
        message = "Do you want to draw a new Card?"
        TimePlayerEl.textContent = "Round " + PlayTime + " [YOU SURRENDER $-5]"
        playerEl.textContent = names + ": $" + chips 
    } else if (sum === 21) {
        startless21 = false 
        message = "Wohoo! You Won Blackjack!!!"
        chips += 150 
        document.getElementById("primary1").disabled = false 
        document.getElementById("primary3").disabled = true 
        document.getElementById("primary2").disabled = true 
        TimePlayerEl.textContent = "Round " + PlayTime + " [YOU WIN $150]"
        playerEl.textContent = names + ": $" + chips
        document.getElementById("win-el").textContent = "You win +150USD";
        setTimeout(function (){
            document.getElementById("win-el").textContent = "";
        }, 2000);
        //alert(playerEl.margin.width) = "sdfds"
        hasBlackJack = true
    } else {
        startless21 = false 
        message = "You've out fo the game"
        document.getElementById("primary2").disabled = true  
        document.getElementById("primary1").disabled = false
        document.getElementById("primary3").disabled = true 
        isAlive = false
        chips -= 50 
        TimePlayerEl.textContent = "Round " + PlayTime + " [YOU LOSE $-50]"
        playerEl.textContent = names + ": $" + chips
        document.getElementById("lose-el").textContent = "You lose -50USD";
        setTimeout(function (){
            document.getElementById("lose-el").textContent = "";
        }, 2000);
        
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard() 
        sum += card
        cards.push(card)
        renderGame();
    }
}

let playerEl = document.getElementById("player-el")
let TimePlayerEl = document.getElementById("timeplayer-el")
TimePlayerEl.textContent = "Round " + PlayTime
playerEl.textContent = names + ": $" + chips

// CASH OUT
