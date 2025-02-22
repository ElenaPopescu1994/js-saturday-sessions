
function yourReward(possibleRewards) {
    const randomReward = Math.floor(Math.random() * possibleRewards.length);
    return possibleRewards[randomReward];
}

const food = [
    "Pizza", 
    "Burger",
    "Ice cream", 
    "Chocolate",
    "Donuts"
];
console.log(`Congratulations! You've won:  ${yourReward(food)}`);

const goodTime = [
    "Gaming", 
    "Swimming",
    "Massage", 
    "Movies",
    "Sleeping"
];
console.log(`Congratulations! You've won:  ${yourReward(goodTime)}`);