class GenerateRandom{
    number0to9() {
        return Math.floor(Math.random() * 10)
    }
}

const NumberOfDigits = 4;

class HitAndBlow{
    constructor(nextNumber=null){
        if(nextNumber == null){
            this.nextNumber = new GenerateRandom();
        }else{
            this.nextNumber = nextNumber;
        }
        this.result = {hit:0,blow:0};
        this.target = this.getTarget();
        this.count = 0;
    }

    getTarget(){
        let target = [];
        for (let i = 0; i < NumberOfDigits; i++) {
            let num = this.selectNextNumber(target, NumberOfDigits);
            target.push(num);
        }
        return target;
    }

    selectNextNumber(target,maxDigit){
        let num = this.nextNumber.number0to9();
        for (let j = 0; j < maxDigit; j++) {
            if (target.indexOf(num) < 0) {
                return num;
            }
            num = this.getNumber0to9(num + 1);
        }
    }
    getNumber0to9(num){
        return num % 9;
    }

    tryCode(input){
        this.count++;
        this.result.hit = 0;
        this.result.blow = 0;

        for(let i=0;i<this.target.length;i++){
            if(this.target[i] == input[i]){
                this.result.hit++;
            }else if(this.target.indexOf(input[i])>=0){
                this.result.blow++;
            }
        }
        return this.checkResult();
    }

    checkResult(){
        if (this.target.length == this.result.hit) {
            return true;
        } else {
            return false;
        }
    }
}

let hit_blow;

function init() {
    hit_blow = new HitAndBlow();
}

function hi_lowExe() {
    let input = document.getElementById("input_val").value;
    let arrayStr = input.split("");
    let array = [];

    arrayStr.forEach(element => {
        array.push(parseInt(element))
    });

    let container = document.getElementById("container");
    let item = document.createElement("li");

    let result;
    if(hit_blow.tryCode(array)){
        result = hit_blow.count + "回で正解"
    }else{
        result = "外れ: " + hit_blow.result.hit + "Hits," + hit_blow.result.blow + "Blow";
    }
    
    item.textContent = result;
    container.insertBefore(item, container.firstChild);
}
