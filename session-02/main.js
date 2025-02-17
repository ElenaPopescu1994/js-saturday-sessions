/*CHALLENGE 9: Survival Game
Write a JavaScript program that simulates a survival challenge. The program should prompt the user to enter:

The player's name
The player's starting Hit Points (HP) (maximum 100)
A hunting skill level (between 0 and 10)
The simulation will run for a set number of days. Each day, the player goes hunting to find food.

Hunting Mechanics:
The chance of a successful hunt is determined by the hunting skill.
A hunting skill of 0 means 0% success (always fails).
A hunting skill of 10 means 100% success (always succeeds).
A hunting skill of X gives an X × 10% success rate.
Use a simulated dice roll (a random number between 1 and 10) to determine the outcome:
If the roll is less than or equal to the hunting skill, the hunt succeeds (+10 HP).
Otherwise, the hunt fails (-10 HP).
Logging Daily Events:
Use console.log() to display the events of each day. Example output:

    Day 4 starts!  
    John (Hunting Skill: 5) rolls a 8  
    John is starving... 💀  
    Current HP: 50  
If the player's HP reaches 0 or below, they die and the simulation ends early. Otherwise, the game continues until the final day.

Good luck, survivor! 🚀 */

console.log(`Hounting game`);

const playerName = prompt(`Input the player's name`);
const hountingSkills = prompt(`Input the player's hounting skill(0-10)`);
let hp = Number(prompt("Input the player's starting Hit Points (HP, max 100)"));
const survivalDays = 10;
let daysCount = 1;

while (daysCount <= survivalDays && hp > 0) {
  console.log(" ");
  console.log(`Day ${daysCount} starts!`);

  let diceRoll = Math.floor(Math.random() * 10) + 1;
  console.log(
    `${playerName} (Hunting Skill: ${hountingSkills}) goes hunting and rolls a ${diceRoll}`
  );

  if (diceRoll <= hountingSkills) {
    console.log(`${playerName} finds food!... `);
    hp += 10;
    if (hp > 100) hp = 100;
  } else {
    console.log(`${playerName} is starving... 💀`);
    hp -= 10;
  }

  console.log(`Current HP: ${hp}`);
  daysCount++;
}

if (hp <= 0) {
  console.log(`${playerName} has died... Game Over!`);
} else {
  console.log(`${playerName} survived the challenge! Congratulations!`);
}
