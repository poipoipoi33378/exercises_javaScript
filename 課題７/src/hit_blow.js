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
        this.result.hit = 4;
        this.result.blow = 0;
    }
}