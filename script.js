// 1a
let warmHugs = "Hi, I am Olaf and I like warm hugs."

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled."

// 2b
console.log(beenImpaled.slice(18, 36));

// 2c
console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "..."

// 3b
let skullBones = `"I don't have a skull ${dotDotDot} or bones.`
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log();

// Bonus
// 6
console.log("Let It Go!".repeat(2).toUpperCase().trim());

// 7a
let reindeers = "Reindeers are better than people."

// 7b
console.log(reindeers.replaceAll("", "_"));

// 8
console.log(Math.SQRT2);

// 9
let newRandomNumber = Math.floor(Math.random() * 17) + 7;
console.log(newRandomNumber);