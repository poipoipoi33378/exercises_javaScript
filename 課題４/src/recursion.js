function recursion(input){

    if(input == 1){
        return 1
    }
    return input + recursion(input-1)
}