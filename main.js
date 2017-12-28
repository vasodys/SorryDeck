const fullDeck = [
    {number: 1,instructions:"MUST either start a pawn out OR move One pawn FORWARD 1 square"},
    {number: 2,instructions:"MUST either start a pawn out OR move One pawn FORWARD 2 squares. DRAW AGAIN"},
    {number: 3,instructions:"MUST move ONE pawn FORWARD 3 squares"},
    {number: 4,instructions:"MUST move ONE pawn BACKWARD 4 squares"},
    {number: 5,instructions:"MUST move ONE pawn FORWARD 5 squares"},
    {number: 7,instructions:"MUST either move ONE pawn FORWARD 7 squares OR SPLIT the move between ANY TWO pawns"},
    {number: 8,instructions:"MUST move ONE pawn FORWARD 8 squares"},
    {number: 10,instructions:"MUST either move ONE pawn FORWARD 10 squares OR move ONE pawn BACKWARD 1 square"},
    {number: 11,instructions:"MOVE ONE pawn FORWARD 11 squares OR SWITCH with any margin pawn"},
    {number: 12,instructions:"MUST move ONE pawn FORWARD 12 squares"},
    {number: 13,instructions:"MUST take one pawn from your start and switch with any margin pawn"}];

var deck = [];

var startGame = function(){
    if(deck == null || deck.length == 0){
        $("#start")[0].innerHTML = "";
        buildDeck();
        drawCard();
    } else{
        drawCard();
    }
}

var buildDeck = function() {
    for (var i = 0; i < fullDeck.length; i++) {
        if (fullDeck[i].number == 1) {
            for (var j = 0; j < 5; j++) {
                deck.push(fullDeck[i]);
            }
        } else {
            for (var k = 0; k < 4; k++) {
                deck.push(fullDeck[i]);
            }
        }
    }
}

var drawCard = function(){
    var cardNode = $("#card");
    var instructionsNode = $("#instructions");
    var random = Math.round((deck.length - 1) * Math.random());
    if (random == -0){
        random = 0;
    }
    cardNode.css("color", "white");

    var card = deck[random].number.toString();
    var instr = deck[random].instructions;
    if (card == "13"){
        card = "Sorry!";
    };
    cardNode[0].innerHTML = card;
    instructionsNode[0].innerHTML = instr;
    setTimeout(function(){
        $("#card").css("color", "black");
    },100);
    deck.splice(random, 1);
}




