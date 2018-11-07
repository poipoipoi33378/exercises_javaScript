function toUry(hash){
 
    for(let key in hash){
        if ((key == "text") && (typeof (hash[key]) == "string")){
            hash[key] = replaceText(hash[key], "foo", "uryyyy!!");
        }else{
            if(typeof(hash[key]) == "object"){
                toUry(hash[key]);
            }
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