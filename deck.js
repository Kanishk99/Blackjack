deck = new Array();
suits = ['spades','diamonds','clubs','hearts'];
ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

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
console.log(deck);
}

function setValue()
{
  if(card.rank=='J'||card.rank=='Q'||card.rank=='K')
  {
   return 10;
  }
  if(card.rank=='A')
  {
    return 'Nothing here yet';
  }
  else
  {
    return parseInt(card.rank);
  }
}

createDeck();
