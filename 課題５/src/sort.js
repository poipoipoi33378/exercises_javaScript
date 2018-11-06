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