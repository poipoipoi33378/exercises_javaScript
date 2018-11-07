function toUry(hash){
 
    for(let key in hash){
        if(key == "text"){
            hash[key] = replaceText(hash[key], "foo", "uryyyy!!");
        }else{
            toUry(hash[key]);
        }
    }
    return hash;
}

function replaceText(obj, from, to){
    let str = obj;

    str = str.replace(from, to);
    if (str == obj){
        return str;
    }

    str = replaceText(str, from, to);
    return str;
}