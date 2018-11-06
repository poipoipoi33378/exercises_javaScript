function recursion(input){

    if(input == 1){
        return 1
    }
    return input + recursion(input-1)
}

function recursionExe() {

    let input = document.getElementById("input_val").value;
    document.getElementById("result").textContent = recursion(parseInt(input));
}
