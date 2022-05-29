'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :B');

// const interface = 'Audio';
// const private = 554;
// const if = 23;


function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
// Arrow function


// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

alert("Retirement Calculator");
const firstName = prompt("What's your first name?");
const age = prompt("What year was you born?");
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(age, firstName));
// console.log(yearsUntilRetirement(1980, 'Bob'));


const apples = prompt("How many apples you have?");
const oranges = prompt("How many oranges you have?");

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} apples pieces and ${orangePieces} oranges pieces.`;
    return juice;
}

console.log(fruitProcessor(apples, oranges));


const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }

    return retirement;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);



// Dolphins vs Koalas
// Dolphins score 44, 23, 71
// Loalas score 65, 54, 49

const calcAvg = (x, y, z) => (x + y + z) / 3;

// Test Data 1
const avgDolphins = calcAvg(44, 23, 71);
console.log(avgDolphins)
// Test Data 2
const avgDolphins2 = calcAvg(85, 54, 41);
console.log(avgDolphins2)

// Test Data 1
const avgKoalas = calcAvg(65, 54, 49);
console.log(avgKoalas);
// Test Data 2
const avgKoalas2 = calcAvg(23, 34, 27);
console.log(avgKoalas2);

function checkWinner1(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}.)`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins!');
    }
    return;
}

checkWinner1(avgDolphins, avgKoalas);
checkWinner1(avgDolphins2, avgKoalas2);


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 1, 1));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

// const bills = [100, 555, 44];
// const calcTips = function (bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }
// const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

//Tip calculator, 15 % bill between 50 and 300 or else 20 %

// const bill = [100, 555, 44];
// const tips = [];
// const total = [];
// console.log(`Food bill: ${bill}`);

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         return tip;
//     } else {
//         const tip = bill * 0.20;
//         return tip;
//     }
// }

// tips.push(calcTip(bill[0]));
// tips.push(calcTip(bill[1]));
// tips.push(calcTip(bill[2]));
// console.log(`Tips amount: ${tips}`);

// total.push((bill[0]) + tips[0]);
// total.push((bill[1]) + tips[1]);
// total.push((bill[2]) + tips[2]);
// console.log(`Total bills: ${total}`);


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // const calcTip = bill => bill > = 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips);
// console.log(total);

