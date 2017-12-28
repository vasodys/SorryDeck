const fullDeck = [
    {number: 1,instructions:""},
    {number: 2,instructions:""},
    {number: 3,instructions:""},
    {number: 4,instructions:""},
    {number: 5,instructions:""},
    {number: 6,instructions:""},
    {number: 7,instructions:""},
    {number: 8,instructions:""},
    {number: 9,instructions:""},
    {number: 10,instructions:""},
    {number: 11,instructions:""},
    {number: 12,instructions:""},
    {number: 13,instructions:""}];

var deck = [];

var startGame = function(){
    if(deck == null || deck.length == 0){
        $("#start")[0].innerHTML = "";
        buildDeck();
        deck = fullDeck.slice(0,52);
        drawCard();
    } else{
        drawCard();
    }
}

var buildDeck = function(){
    for (i = 0; i < fullDeck.length; i++){
        if (fullDeck[i].number = 1){
            for (i = 0; i < 5; i++){
                deck.push(fulldeck[i]);
            }
        }else {
            for (i = 0; i < 4; i++){
                deck.push(fulldeck[i]);
            }
        }
}

var drawCard = function(){
    var cardNode = $("#card");
    var random = Math.round((deck.length - 1) * Math.random());
    if (random == -0){
        random = 0;
    }
    cardNode.css("color", "white");

    var card = deck[random].number.toString();
    if (card == "13"){
        card = "Sorry!";
    };
    cardNode[0].innerHTML = card;
    setTimeout(function(){
        $("#card").css("color", "black");
    },100);
    deck.splice(random, 1);
}




