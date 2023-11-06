// Justin Choi
// Daily Warm-ups
let name = "Justin Choi";
let year = "2010";
console.log(`Hi my name is ${name} and I graduated high school in ${year}.`);

// 10/16/2023 Warmup

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter("codeup"));

const replaceMethod = (str) => str.replace(str.charAt(0), str.charAt(0).toUpperCase());
console.log(replaceMethod("codeup"));

// 10/19/2023
let num = 100;
while (num >= 0) {
    if (num % 2 === 0) {
        console.log(num + ' even');
    } else {
        console.log(num)
    }

    num -= 5;
}

for (let i = 1; i <= 1; i++) {
    console.log(i);
}

// 10/20/2023 warmup
const getEvenNumbers = (num) => {
    let numbers = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

let x = getEvenNumbers(100);
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// 10/23/2023 warmup
let movies = ["Big Daddy", "Jump Street 22", "The Terminator", "Men in Black", "Harry Potter"];
movies.sort();
movies.forEach((movie) => console.log(movie));

// 10/24/2023 warmup
let cars = [
    {
        make: "BMW",
        model: "535xi",
        color: "silver",
    },
    {
        make: "Mercedes",
        model: "e350",
        color: "white",
    },
    {
        make: "Lexus",
        model: "es400",
        color: "white",
    },
]

for (let car of cars) {
    console.log(car);
}

// 11/1/2023
let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"]
        }
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: []
        }
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"]
        }
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"]
        }
    },
]
const filterLanguageUser = (devs) => {
    let devNames = []
    for (let dev of devs) {
        if (dev.languages.frontend.includes('JavaScript')) {
            devNames.push(dev.name);
        }
    }
    return devNames;
}

console.log(filterLanguageUser(developers));

let elements = [
    {
        el: "button",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];

function changeCss(arrOfElements, bgColor, textColor) {
    for (let ele of arrOfElements) {
        ele.style.backgroundColor = bgColor;
        ele.style.color = textColor;
    }
}

changeCss(elements, 'blue', 'red');
console.log(elements);

// 11/6/2023 warmups

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();