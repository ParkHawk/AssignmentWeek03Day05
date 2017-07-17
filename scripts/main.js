/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {

  let total = 0;
for (x = 0; x < hand.length; x++){
  if (hand[x] === "J" || hand[x] === "Q" || hand[x] === "K"){
    total += 10;
  } else if (hand[x] === "A" && total < 11){
    total += 11;
  } else if (hand[x] === "A" && total >= 11){
    total += 1;
  } else {
    hand[x] = parseInt(hand[x], 10);
    total += hand[x];
  }
}
if (hand.includes("A") && total > 21){
 total = total - 10;
 }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
