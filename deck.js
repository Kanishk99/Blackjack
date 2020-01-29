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
  else if(card.rank=='A' && playerTotal>21)
  {
    return 1;
  }
  else
  {
    return parseInt(card.rank);
  }
}

function playerHand()
{
  playerCards = {};
  if(checkBust)
  {
  playerCards = deck.pop();
  playerTotal += playerCards.value;
  checkBust();
  }
  console.log(playerCards.suit);
}

function checkBust()
{
  if(playerTotal>21)
  {
    document.getElementById("card").innerHTML += "BUST!";
    document.getElementById("hit").disabled = true;
    return true;
  }
  else
  {
    return false;
  }
}

function dealerHand()
{
  dealerCards = {};
  dealerCards = deck.pop();
  console.log(dealerCards);
}

function hitMe()
{
  playerHand();
  document.getElementById("card").innerHTML += "<BR>";
  document.getElementById("card").innerHTML += playerCards.rank + playerCards.suit;
  document.getElementById("card").innerHTML += playerTotal;
}


createDeck();
shuffle(deck);



