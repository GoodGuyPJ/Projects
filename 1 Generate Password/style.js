// // let Fullname = "rohan";
// // let age = 11;
// // let student = false;

// // document.getElementById("p1").textContent = `Your name is ${Fullname}`;


// const decrese = document.getElementById("decreaseBtn");
// const reset = document.getElementById("resetBtn");
// const increase = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countLabel");

// let count = 0;
// increase.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }
// decrese.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// reset.onclick = function(){
//     count = 0;
//     countlabel.textContent = count;
// }



// 2
// const MyButton = document.getElementById("MyButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min =1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// MyButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random()*max)+min;
//     randomNum2 = Math.floor(Math.random()*max)+min;
//     randomNum3 = Math.floor(Math.random()*max)+min;
//     myLabel1.textContent = randomNum1;
//     myLabel2.textContent = randomNum2;
//     myLabel3.textContent = randomNum3;
// }



//3
// const minimum = 2;
// const maximum = 5;
// const ans= Math.floor(Math.random()* (maximum - minimum +1)) + minimum;

// let attemps =0;
// let guess;
// let running = true;

// while(running){
//     guess= window.prompt(`Guesss a number between ${minimum} - ${maximum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Enter Valid NUM");
//     }
//     else if(guess<minimum || guess> maximum){
//         window.alert("Valid Number Reqired");
//     }
//     else{
//         attemps++;
//         if(guess<ans){
//             window.alert("too low try again");
//         }
//         else if(guess>ans){
//             window.alert("too high try again");
//         }
//         else{
//             window.alert(`Congrats you chose correct ${ans}. ans Number of attempts it took is ${attemps} `);
//             running= false;
//         }
//     }
// }



//4

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");

// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp*9/5 +32;
//         result.textContent  = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value);
//         temp = (temp-32)  * 5/9;
//         result.textContent  = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a Unit";
//     }
// }

console.log("abcdefghijklmnopqrstuywxyz".toUpperCase())


//5 
// Random Pasword generrator
function generatePassword(length, includeLowercase, includeUppercase,
    includeNumber, includeSymbols){
        const lowerCaseChars = "abcdefghijklmnopqrstuywxyz";
        const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUYWXYZ";
        const NumberChars = "0123456789";
        const SymbolChar= "!@#$%^&*()_-";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowerCaseChars : "";
        allowedChars += includeUppercase ? UpperCaseChars : "";
        allowedChars += includeNumber ? NumberChars : "";
        allowedChars += includeSymbols ? SymbolChar : "";

        if(length<=0){
            return `(passwrod length must be at lest 1)`;
        }
        if(allowedChars.length === 0){
            return `(at lest 1 set of charcter needs to be selected)`;
        }

        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random()* allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;
    }

const paswordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(paswordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumber,
                                  includeSymbols);
                
console.log(`Generated Password is :  ${password}`)
