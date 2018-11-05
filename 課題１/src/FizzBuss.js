function fizz_buzz(number){

    if (((number % 3) == 0)&&((number % 5) == 0)) {
        return "FizzBuzz"
    } else if((number % 3) == 0){
        return "Fizz"
    } else if ((number % 5) == 0) {
        return "Buzz"
    }

    return number;
}

function fizzBuzzExe() {
    let num = document.getElementById("number").value;
    let container = document.getElementById("container");
    for (let i = 0; i < num; i++) {
        let item = document.createElement("li");
        item.textContent = fizz_buzz(i)
        container.appendChild(item)
    }
}