function stringHash(s){
    let h = {};

    let elemnt = s.split(" ")

    elemnt.forEach(str => {
        if (h[str]){
            h[str] += 1
        }else{
            h[str] = 1
        }
    });

    return h;
}