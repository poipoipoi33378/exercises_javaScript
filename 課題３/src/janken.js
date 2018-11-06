const GU = "グー"
const CHO = "チョキ"
const PA = "パー"

class Janken{
    constructor(){
        this.your = "";
        this.computer = "";
        this.judgeTable = {
            "グー": { "パー": "コンピュータの勝ち", 
                     "グー": "あいこ",
                     "チョキ": "あなたの勝ち" },
            "パー": { "チョキ": "コンピュータの勝ち",
                     "パー": "あいこ",
                     "グー":"あなたの勝ち"},
            "チョキ": { "グー" : "コンピュータの勝ち",
                     "チョキ": "あいこ" ,
                     "パー":"あなたの勝ち"},
        }
    }

    setYour(next){
        this.your = next;
    }
    setComuter(){
        let random = Math.random()*10;

        // チョキを出す確率が高いアルゴリズム
        if(random > 9){
            this.computer = PA
        }else if(random > 7){
            this.computer = GU
        }else{
            this.computer = CHO
        }
    }

    judge(){
        return this.judgeTable[this.your][this.computer];
    }
};

function jankenExe(input){
    janken = new Janken();

    janken.setComuter();
    janken.setYour(input);

    document.getElementById("computer").textContent = "コンピューター：" +janken.computer;
    document.getElementById("result").textContent = janken.judge();
}