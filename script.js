
// Array //
let questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];

// Array.of //
let numbers = Array.of ('1','2','3','4','5');

// Array.from //
let chars = Array.from("Nicknames");

const set = new Set(['Michael', 'Mikey', 'Mike', 'Mic', 'M']);

let unique = Array.from(set);

// Storing declared variables //
let One = numbers[0];
let Three = numbers[2];
let Five = numbers[4];

// STEP FOUR //
// lol //
// Food Arrays //
const fruits = ['apples', 'Pears', 'Kiwis', 'Grapes', 'Watermelon'];

const fruit = fruits.push('Oranges');

const noodles = ["Rice", "Ramen", "Udon", "Penne", "Spaghetti"];

const noodle = noodles.shift();

const bbq = ['Steak', 'Hotdogs', 'Beer', 'Water bottles'];

bbq.splice(2, 0, 'corn');

// Step 5 //
// Number Array //
const numarray = [2, 3, 4, 5];

for (let numV = 0; numV < numarray.length; numV++) {
    console.log(numarray[numV]);
}

const num = numarray.map((numarray) => numarray - 1);

// STEP SIX Destructure the first two elements into seperate variables. //
// Try using past parameter to capture the remaining elements. //
const alphabetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const [alpha, beta, ...rest] = alphabetter;

// Console.log for step 1 //
console.log(questions[1]);
console.log(numbers);
console.log(chars);
console.log(unique);

// Console.log for step 2 //
console.log(One, Five, Three);

// Console.log for step 3 //
console.log(questions.length);
console.log(numbers.length);
console.log(chars.length);
console.log(unique.length);

// Console.log for step 4 //
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(noodles);
console.log(noodle);
console.log(noodles.unshift('Penne', 'Lasagna', 'Rigatoni'));
console.log(noodles);
console.log(bbq);

// Console.log for step 5 // 
bbq.forEach((string) => console.log(string));

// numV for loop prints at top of terminal //
console.log(numarray);
console.log(num);

// Console.log for step 6 //
console.log(alphabetter);
console.log(alpha);
console.log(beta);
console.log(rest);