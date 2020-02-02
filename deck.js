deck = new Array();
suits = ['spades','diamonds','clubs','hearts'];
ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
playerTotal = 0;
dealerTotal = 0;


/*
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

function shuffle(array)
{
  for (var i = array.length - 1; i > 0; i--) 
  {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


function createDeck()
{
  for(suitsIndex=0;suitsIndex<suits.length;suitsIndex++)
  {
    for(ranksIndex=0;ranksIndex<ranks.length;ranksIndex++)
    {
        card = {}; 
        card.suit = suits[suitsIndex];
        card.rank = ranks[ranksIndex];
        card.value = setValue();
        deck.push(card);
    }
  }
}

function setValue()
{
  if(card.rank=='J'||card.rank=='Q'||card.rank=='K')
  {
   return 10;
  }
  else if(card.rank=='A' && playerTotal<21)
  {
    return 11;
  }
  else if(card.rank=='A' && playerTotal>21) /*Ace must be either 1 or 11 */
  {
    return 1;
  }
  else
  {
    return parseInt(card.rank);
  }
}

function checkBust()
{
  if(playerTotal>21)
  {
    document.getElementById("playerSide").innerHTML += "<BR> BUST!";
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    return true;
  }
  else
  {
    return false; 
  }
}



function playerHand()
{
  playerCards = {};
  if(!checkBust())
  {
  playerCards = deck.pop();
  playerTotal += playerCards.value;
  checkBust();
  }
  console.log(playerCards.suit);
}

function playerHit()
{
  playerHand();
  document.getElementById("playerSide").innerHTML += "<BR>";
  document.getElementById("playerSide").innerHTML += playerCards.rank + playerCards.suit;
  document.getElementById("playerSide").innerHTML += " Total : " + playerTotal;
}

function playerStand()
{
  document.getElementById("hit").disabled = true;
  document.getElementById("stand").disabled = true;
  dealerTurn();
}

function dealerHand()
{
  dealerCards = {};
  if(checkBust)
  {
  dealerCards = deck.pop();
  dealerTotal += dealerCards.value;
  }
  console.log(dealerCards.suit);
}

function dealerTurn()
{
  while(dealerTotal < 17)
  {
    dealerHand();
    document.getElementById("dealerSide").innerHTML += "<BR>";
    document.getElementById("dealerSide").innerHTML += dealerCards.rank + dealerCards.suit;
    document.getElementById("dealerSide").innerHTML += " Total : " + dealerTotal;
  }
}





createDeck();
shuffle(deck);



