const fullDeck = [1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12];
var deck = null;

var startGame = function(){
    if(deck == null || deck.length == 0){
        $("#start")[0].innerHTML = "";
        deck = fullDeck.slice(0,48);
        drawCard();
    } else{
        drawCard();
    }
}

var drawCard = function(){
    var random = Math.round((deck.length - 1) * Math.random());
    if (random == -0){
        random = 0;
    }
    $("#number")[0].innerHTML = deck[random].toString();
    deck.splice(random, 1);
}




