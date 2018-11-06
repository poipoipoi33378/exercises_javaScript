class HiLow{
    constructor(){
        this.target = Math.floor(Math.random() * 100);
        this.trycount = 0;
    }

    hi_low(number){
        this.trycount++;
        if(number == this.target){
            return "正解:・・・"+this.trycount+"回で当てました";
        } else if (number > this.target) {
            return "もっと下:"+number;
        }else{
            return "もっと上:" + number;
        }
    }
}

let hilow;

function init() {
    hilow = new HiLow();
}

function hi_lowExe() {
    let input = parseInt(document.getElementById("input_val").value);
    let container = document.getElementById("container");
    let item = document.createElement("li");

    item.textContent = hilow.hi_low(parseInt(input));
    // container.appendChild(item)
    container.insertBefore(item, container.firstChild);
}
