class HitAndBlow{
    constructor(){
        this.target = [];
        this.setTarget();
        this.result = {hit:0,blow:0};
    }

    setTarget(){
        this.target.push(Math.floor(Math.random() * 10));
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 10);
            for (let j = 0; j < 4; j++) {
                if (this.target.indexOf(num) < 0) {
                    break;
                }
                num++;
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