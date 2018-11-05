function stringHash(s){
    let h = {};
    let elemnt = s.split(" ")
    elemnt.forEach(str => {
        h[str] = h[str]? h[str]+1 : 1 
    });
    return h;
}

function stringhashExe() {
    let h = {}
    let str = document.getElementById("input_val").value;
    h = stringHash(str)
    for (let key in h) {
        let item = document.createElement("li");
        item.textContent = key + ":" + h[key]
        container.appendChild(item)
    }
}
