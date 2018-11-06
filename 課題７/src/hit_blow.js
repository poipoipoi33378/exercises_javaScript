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
        this.result.hit = 0;
        this.result.blow = 0;

        for(let i=0;i<this.target.length;i++){
            if(this.target[i] == input[i]){
                this.result.hit++;
            }else if(this.target.indexOf(input[i])>=0){
                this.result.blow++;
            }
        }
    }
}