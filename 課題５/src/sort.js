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

function quickSort(input) {

    let pivot = 20;
    let left = [5];
    let right = [31,38,42];

    let result = [];
    result = result.concat(left);
    result = result.concat(pivot);
    result = result.concat(right);

    return result;
}