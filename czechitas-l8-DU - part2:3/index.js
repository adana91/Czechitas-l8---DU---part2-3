console.log('funguju!');

let number = 1;
const dice = document.querySelector('.dice');
const changeNumber = () => {
    number = number + 1
    if (number === 7) {
        number = 1
    }
    dice.src = `img/side${number}.svg`;
}
document.addEventListener('keydown', changeNumber);


// object.addEventListener("keypress", myScript)

/* 
document.getElementById("demo").addEventListener("keypress", myFunction)
function myFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
} */
