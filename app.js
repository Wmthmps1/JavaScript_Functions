
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(n) {


    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else if (n < 0) {
        for (let i = 0; i >= n; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        // n == zero
        console.log("n is zero.");
    }
}

printOdds(11);
printOdds(-11);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (userName == null || age == null) {
        console.log("Please provide values for name and age.");
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge("Matt", 15);
checkAge("Matt", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function findQuadrant(x, y) {
    // if x = 0 -> X-axis
    // if y = 0 -> y-axis
    // if x is positive and y is positive -> Quadrant 1
    // if x is negative and y is positive -> Quadrant 2
    // if x is negative and y is negative -> Quadrant 3
    // if x is positive and y is negative -> Quadrant 4
    let message1 = `(${x},${y}) is in Quadrant 1`;
    let message2 = `(${x},${y}) is in Quadrant 2`;
    let message3 = `(${x},${y}) is in Quadrant 3`;
    let message4 = `(${x},${y}) is in Quadrant 4`;

    if (x == 0 && y == 0) {
        console.log(`(${x},${y}) is in the center.`);
    }
    else if (x == 0) {
        console.log(`(${x},${y}) is on the x-axis`);
    } else if (y == 0) {
        console.log(`(${x},${y}) is on the y-axis`);
    } else if (x > 0) {
        (y > 0) ? console.log(message1) : console.log(message4);
    } else if (x < 0) {
        (y > 0) ? console.log(message2) : console.log(message3);
    }

}

findQuadrant(0, 0);
findQuadrant(0, 1);
findQuadrant(1, 0);
findQuadrant(1, 2);
findQuadrant(-2, 2);
findQuadrant(-2, -2);
findQuadrant(2, -2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function whatTypeOfTriangle(x, y, z) {
    if ((x + y) > z) {
        if (x == y && y == z) {
            console.log(`Sides (${x}, ${y}, ${z}) form an equilateral triangle.`);
        } else if (x == y || y == z || x == z) {
            console.log(`Sides (${x}, ${y}, ${z}) form an isosceles triangle.`);
        } else {
            console.log(`Sides (${x}, ${y}, ${z}) form a scalene triangle.`);
        }

    } else {
        console.log(`Sides (${x}, ${y}, ${z}) do not form a valid triangle.`);
    }
}

whatTypeOfTriangle(1, 1, 1);
whatTypeOfTriangle(1, 2, 2);
whatTypeOfTriangle(2, 3, 1);
whatTypeOfTriangle(2, 1, 3);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function getData(planLimit, day, usage) {

    //planLimit GB
    //30 days

    let dailyAverage = (planLimit / 30).toFixed(2);
    let daysRemaining = 30 - day;
    let averageDailyUse = (usage / day).toFixed(2);
    let dataRemaining = planLimit - usage;
    let remainingUsageRate = (dataRemaining / daysRemaining).toFixed(2);
    let excessData = (daysRemaining * averageDailyUse) - dataRemaining;
    let daysUsedString = (day == 1) ? "1 day" : `${day} days`;
    let daysRemainingString = (daysRemaining == 1) ? "1 day" : `${daysRemaining} days`;


    if (usage < planLimit) {
        console.log("You are still under your data limit.");

        if (averageDailyUse == dailyAverage) {
            console.log(`You are ON TRACK with your average daily use: (${averageDailyUse} GB/day)`);
        } else if (averageDailyUse > dailyAverage) {
            console.log(`You are EXCEEDING your average daily use: (${averageDailyUse} GB/day).`);
            console.log(`If you continue, you will exceed your data plan by ${excessData} GB.`)
            console.log(`To stay below this plan, change your daily use to (${remainingUsageRate}) GB/day`);
        } else {
            console.log(`You are UNDER your average daily use: (${averageDailyUse} GB/day)`);
            console.log(`You can increase your usage to (${remainingUsageRate} GB/day)`);
        }

    } else if (usage > planLimit) {
        console.log("You have exceeded your data limit.");

    } else {
        console.log("You have reached your data limit.");
    }

}

getData(100, 15, 50);
getData(100, 10, 60);
getData(100, 25, 60);
getData(100, 29, 105);
getData(100, 30, 100);