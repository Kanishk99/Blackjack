deck = new Array();
suits = ['spades','diamonds','clubs','hearts'];
ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];


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
  else if(card.rank=='A')
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
  playerIndex = 0;
  playerCards = new Array();
  playerCards[playerIndex] = deck.pop();
  playerIndex++;
  document.getElementById("card").innerHTML = "test";
  console.log(playerCards);
}

function dealerHand()
{
  dealerIndex = 0;
  dealerCards = new Array();
  dealerCards[dealerIndex] = deck.pop();
  dealerIndex++;
  console.log(dealerCards);
}

function hit()
{
  document.getElementById("card").innerHTML = "Hello world";
}


createDeck();
shuffle(deck);


