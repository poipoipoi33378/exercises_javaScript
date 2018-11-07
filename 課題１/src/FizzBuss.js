function fizz_buzz(number){

    if (checkFizz(number) && checkBuzz(number)) {
        return "FizzBuzz"
    } else if(checkFizz(number)){
        return "Fizz"
    } else if (checkBuzz(number)) {
        return "Buzz"
    }
    return number;
}

function checkFizz(number) {
    return (number % 3) == 0;
}

function checkBuzz(number) {
    return (number % 5) == 0;
}

function fizzBuzzExe() {
    let num = parseInt(document.getElementById("number").value);
    let container = document.getElementById("container");
    for (let i = 1; i < num+1; i++) {
        let item = document.createElement("li");
        item.textContent = fizz_buzz(i)
        container.appendChild(item)
    }
}