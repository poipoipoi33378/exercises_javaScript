function stringHash(s){

    let elemnt = s.split(" ")
    return countElemnts(elemnt);
}

function countElemnts(elemnt) {
    let h = {};
    elemnt.forEach(key => {
        countKey(h, key);
    });
    return h;
}

function countKey(h, key) {
    h[key] = h[key] ? h[key] + 1 : 1;
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
