class GenerateRandom{
    number0to9() {
        return Math.floor(Math.random() * 10)
    }
}
class HitAndBlow{
    constructor(nextNumber=null){
        if(nextNumber == null){
            this.nextNumber = new GenerateRandom();
        }else{
            this.nextNumber = nextNumber;
        }
        this.result = {hit:0,blow:0};
        this.target = [];
        this.setTarget();
        this.count = 0;
    }

    setTarget(){
        this.target.push(this.nextNumber.number0to9());
        for (let i = 0; i < 3; i++) {
            let num = this.nextNumber.number0to9();
            for (let j = 0; j < 4; j++) {
                if (this.target.indexOf(num) < 0) {
                    break;
                }
                num = (num+1)%9;
            }
            this.target.push(num);
        }
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
