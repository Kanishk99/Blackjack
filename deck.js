deck = new Array();
suits = ["spades", "diamonds", "clubs", "hearts"];
ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
playerTotal = 0;
dealerTotal = 0;
divDealerIncrement = 1;
divPlayerIncrement = 1;

/*
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function createDeck() {
  for (suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      card = {};
      card.suit = suits[suitsIndex];
      card.rank = ranks[ranksIndex];
      card.value = setValue();
      deck.push(card);
    }
  }
}

function setValue() {
  if (card.rank == "J" || card.rank == "Q" || card.rank == "K") {
    return 10;
  } else if (card.rank == "A" && playerTotal < 21) {
    return 11;
  } else if (card.rank == "A" && playerTotal > 21) {
    /*Ace must be either 1 or 11 */
    return 1;
  } else {
    return parseInt(card.rank);
  }
}

function disableButtons(bool) {
  document.getElementById("hit").disabled = bool;
  document.getElementById("stand").disabled = bool;
}

function checkBustPlayer() {
  if (playerTotal > 21) {
    document.getElementById("playerSide").innerHTML += "<BR> BUST!";
    disableButtons(true);
    return true;
  } else {
    return false;
  }
}

function checkBustDealer() {
  if (dealerTotal > 21) {
    document.getElementById("playerSide").innerHTML += "<BR>DEALER BUST!";
    return true;
  } else {
    return false;
  }
}

function playerHand() {
  playerCards = {};
  if (!checkBustPlayer()) {
    playerCards = deck.pop();
    playerTotal += playerCards.value;
    checkBustPlayer();
  }
  console.log(playerCards.suit);
}

function playerTurn() {
  playerHand();
  divPlayer = "playerSide" + divPlayerIncrement;
  document.getElementById(divPlayer).innerHTML += "<BR>";
  document.getElementById(divPlayer).innerHTML +=
    playerCards.rank + playerCards.suit;
  document.getElementById(divPlayer).innerHTML += " Total : " + playerTotal;
  divPlayerIncrement++;
}

function playerStand() {
  disableButtons(true);
  while (dealerTotal < 17) {
    dealerTurn();
  }
  checkVictory();
}

function dealerHand() {
  dealerCards = {};
  if (!checkBustDealer()) {
    dealerCards = deck.pop();
    dealerTotal += dealerCards.value;
    console.log(dealerCards.suit);
  }
}

function dealerTurn() {
  dealerHand();
  divDealer = "dealerSide" + divDealerIncrement;
  document.getElementById(divDealer).innerHTML += "<BR>";
  document.getElementById(divDealer).innerHTML +=
    dealerCards.rank + dealerCards.suit;
  document.getElementById(divDealer).innerHTML += " Total : " + dealerTotal;
  divDealerIncrement++;
}

function checkVictory() {
  if (playerTotal > dealerTotal && !checkBustPlayer()) {
    document.getElementById("victory").innerHTML += "Player wins!";
  } else if (dealerTotal > playerTotal && !checkBustDealer()) {
    document.getElementById("victory").innerHTML += "Dealer wins!";
  } else if (playerTotal == dealerTotal) {
    document.getElementById("victory").innerHTML += "PUSH!";
  }
}

function startGame() {
  disableButtons(false);
  createDeck();
  shuffle(deck);
  dealerTurn();
  playerTurn();
}
