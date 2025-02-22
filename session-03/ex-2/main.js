//aruncarea mai multor zaruri si afisarea fetelor lor

/*function rollDice(sides1 = 6, sides2 = 6) {
    const roll1 = Math.floor(Math.random() * sides1) + 1;
    const roll2 = Math.floor(Math.random() * sides2) + 1;
    return [roll1, roll2];
} */

function diceRoll(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDiceSet(dicedNumber = 2) {
  const diceSet = [];

  for (let i = 0; i < 2; i++) {
    const diceSet = [];
    diceSet[i] = rollDice();
  }
  return diceSet;
}

console.log(`You rolled ${rollDiceSet(2)}`);
