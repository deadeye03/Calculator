let btn7 = document.getElementById('btn5');
let btn8 = document.getElementById('btn6');
let btn9 = document.getElementById('btn7');
let btn4 = document.getElementById('btn9');
let btn5 = document.getElementById('btn10')
let btn6 = document.getElementById('btn11')
let btn1 = document.getElementById('btn13')
let btn2 = document.getElementById('btn14')
let btn3 = document.getElementById('btn15')
let btn0 = document.getElementById('btn17')
let btnPoint = document.getElementById('btn18')

let ClearScreen = document.getElementById('btn1')
let Add = document.getElementById('btn16');
let CalSubtract = document.getElementById('btn12')
let divide = document.getElementById('btn4')
let sqaure = document.getElementById('btn2');
let mult = document.getElementById('multi')

let Equal = document.getElementById('btn19');


let display = document.getElementById('result')
let currentDisplay1 = "";
let click = "";
let FirstPart = 0;
let SecondPart = 0;
let count = 0;
const ClearDisplay = () => {
    console.log(currentDisplay1)
    currentDisplay1 = "";
    console.log(currentDisplay1 + "hii" + count);
    count = 0;
    display.innerHTML = `<h2>${currentDisplay1}</h2>`;
    console.log(count);
}
ClearScreen.addEventListener('click', (e) => {
    ClearDisplay();
})

const genrateNumber = (digit) => {

    currentDisplay1 += digit;
    if (count < 12) {
        display.innerHTML = `<h2>${currentDisplay1}</h2>`;

    }
    else {
        display.innerHTML = `<h2 style="color: red;">ERROR</h2>`
        count = 0;
        currentDisplay1 = "";
    }
    count++;
}
const add = (first, second) => {
    let adding = parseInt(first) + parseInt(second);
    currentDisplay1 = adding;
    display.innerHTML = `<h2>${adding}</h2>`;

}
Add.addEventListener('click', function () {
    FirstPart = currentDisplay1;
    click = "add";
    ClearDisplay();
})
const subtraction = (first, second) => {
    console.log('subtract')
    console.log("egg")
    let subtraction = parseInt(first) - parseInt(second);
    currentDisplay1 = subtraction;
    display.innerHTML = `<h2>${subtraction}</h2>`;

}
CalSubtract.addEventListener('click', function () {
    FirstPart = currentDisplay1;
    click = "subtract";
    ClearDisplay();
})
const multiplication = (first, second) => {
    console.log(3 * 2)
    let result = parseInt(first) * parseInt(second);
    currentDisplay1 = result;
    display.innerHTML = `<h2>${result}</h2>`;

}
mult.addEventListener('click', function () {
    FirstPart = currentDisplay1;
    click = "multi"
    ClearDisplay();
})
const division = (first, second) => {
    console.log(3 ** 2)
    let division = parseInt(first) / parseInt(second);
    currentDisplay1 = division;
    Stringdivision = division.toString();
    console.log(Stringdivision.length)
    display.innerHTML = `<h2>${Stringdivision.slice(0, 12)}</h2>`;


}
divide.addEventListener('click', function () {
    FirstPart = currentDisplay1;
    click = "divide";
    ClearDisplay();
})
const squareRoots = (first, second) => {
    console.log(3 ** 2)
    let squareRoots = parseInt(first) ** parseInt(second);

    display.innerHTML = `<h2>${squareRoots}</h2>`;


}
sqaure.addEventListener('click', function () {
    console.log('sqaure')
    FirstPart = currentDisplay1;
    click = "square";
    ClearDisplay();
})

Equal.addEventListener('click', function () {
    console.log('hjii');
    SecondPart = currentDisplay1;
    ClearDisplay();
    if (click == "add") {
        console.log("add")
        add(FirstPart, SecondPart);
    }
    else if (click == "subtract") {
        subtraction(FirstPart, SecondPart);
    }
    else if (click == "multi") {
        multiplication(FirstPart, SecondPart);
    }
    else if (click == "divide") {
        division(FirstPart, SecondPart);
    }
    else if (click == "square") {
        squareRoots(FirstPart, SecondPart);
    }

})





btn7.addEventListener('click', function () {
    genrateNumber(7)
});
btn8.addEventListener('click', function () {
    genrateNumber(8)
});
btn9.addEventListener('click', function () {
    genrateNumber(9)
});
btn4.addEventListener('click', function () {
    genrateNumber(4)
});
btn5.addEventListener('click', function () {
    genrateNumber(5)
});
btn6.addEventListener('click', function () {
    genrateNumber(6)
});
btn1.addEventListener('click', function () {
    genrateNumber(1)
});
btn2.addEventListener('click', function () {
    genrateNumber(2)
});
btn3.addEventListener('click', function () {
    genrateNumber(3)
});
btn0.addEventListener('click', function () {
    genrateNumber(0)
});
btnPoint.addEventListener('click', function () {
    genrateNumber(".");
});