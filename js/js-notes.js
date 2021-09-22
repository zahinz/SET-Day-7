// console.log("test");

// const apple = 12;
// const orange = 20;

// console.log(apple, orange);

// const banana = 10, berry = 5, bananaType = "berry";

// const iphone = 100;
// const iwatch = "50";

// console.log(iphone+iwatch);


// ! Output in log 

// const myName = prompt(`What is your name?`);
// const birthYear = prompt(`What is your birth year?`);

// console.log(`Hi ${myName}! Your age is ${2021-birthYear}.`);



// ? Target the #para

document.getElementById(`para`).innerHTML = `Hello world!`


// ? Target the #score

let score = 0
let hpBar 

document.getElementById(`score`).innerHTML = score;
// document.getElementById(`score`).style.backgroundColor = `blue`;
document.getElementById(`score`).style.textAlign = `center`;
// document.getElementById(`score`).style.color = `white`;
// document.getElementById(`score`).style.padding = `40px 60px`;


// ? Function in the button

// function addScore(num) {
//     console.log(`I press the + button`);
//     score += num;
//     console.log(score);
//     document.getElementById(`score`).innerHTML = score;
// }

// function subScore(num) {
//     console.log(`I press the - button`);
//     score -= num;
//     console.log(score);
//     document.getElementById(`score`).innerHTML = score;
// }

function count(num) {
    
    // ? console log math symbol
    let symb
    if (num < 0) {
        symb = `minus`
    } 
    else {
        symb = `add`
    }
    console.log(`I press the button to ${symb} ${num}`);

    // ? math operation of the score
    score += num;
    // console.log(score);
    document.getElementById(`score`).innerHTML = score;

    // ? HP bar increment
    document.getElementById(`hp-bar`).style.transform = `scaleX(${score * 100}%)`

    // ? change color when negative value
    // if (document.getElementById(`hp-bar`).style.transform < 0) {

    //     console.log(document.getElementById(`hp-bar`).style.backgroundColor = `orange`
    // }

    // ? console log
    console.log(document.getElementById(`hp-bar`).style.transform, score);

    if (score > 10) {
        document.getElementById(`para`).innerHTML = `Woah! You reached highscore!`;
        document.getElementById(`score`).style.backgroundColor = `orange`;

    } else {
        document.getElementById(`para`).innerHTML = `Hello world!`;
        document.getElementById(`score`).style.backgroundColor = `blue`;
    }

}


// ? reset counter when click at the number

function reset() {
    score = 0;
    document.getElementById(`score`).innerHTML = score;
    document.getElementById(`hp-bar`).style.width = 0;
    document.getElementById(`para`).innerHTML = `Hello world!`;
    document.getElementById(`score`).style.backgroundColor = `blue`;
    console.log(document.getElementById(`hp-bar`).style.width, score);

}


// ? hp bar increment
