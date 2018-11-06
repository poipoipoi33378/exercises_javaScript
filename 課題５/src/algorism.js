function algorismExe(){
    let input = document.getElementById("input_val").value;
    let arrayStr = input.split(",");
    let array = [];
    arrayStr.forEach(element => {
        array.push(parseInt(element))
    });
    document.getElementById("sum").textContent = sum(array);
    document.getElementById("ave").textContent = average(array);
    document.getElementById("max").textContent = max(array);
    document.getElementById("min").textContent = min(array);
    document.getElementById("bubble_sort").textContent = bubbleSort(array);
    document.getElementById("quiq_sort_reverse").textContent = reverse(quickSort(array));

}

function bubbleSort(input){
    
    let target;
    let array = input.slice(0, input.length);

    for(let i=0;i<array.length-1;i++){
        for (let j = 0; j < array.length-1-i;j++){
            if(array[j] > array[j+1]){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            target = array[j + 1];
        }
    }
    return array;
}

function quickSort(array) {

    if(array.length == 1){
        return array[0] 
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for(let i=1;i<array.length;i++){
        if(array[i] <= pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    if (left.length > 0) {
        left = quickSort(left);
    }
    if (right.length > 0) {
        right = quickSort(right);
    }

    let result = [];
    result = result.concat(left);
    result = result.concat(pivot);
    result = result.concat(right);

    return result;
}

function sum(input){
    
    let sum = 0;
    for(let i=0;i<input.length;i++){
        sum = input[i] + sum;
    }
    return sum;
}

function average(input) {
    return sum(input)/input.length;
}

function max(input) {
    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        if(result < input[i]){
            result = input[i];
        }
    }
    return result;
}

function min(input) {
    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        if (result > input[i]) {
            result = input[i];
        }
    }
    return result;
}

function reverse(input){

    let result = [];

    for (let i = 0; i < input.length; i++) {
        result.push(input[input.length-i-1])
    }
    return result;
}
