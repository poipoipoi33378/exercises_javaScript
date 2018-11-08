function toUry(hash){
 
    for(let key in hash){
        if (isTextTerminate(key,hash)){
            hash[key] = replaceText(hash[key], "foo", "uryyyy!!");
        }else if (isHash(key,hash)){
            toUry(hash[key]);
        }
    }
    return hash;
}

function isHash(key, hash){
    return (typeof (hash[key]) == "object")
}

function isTextTerminate(key,hash){
    return (key == "text") && (typeof (hash[key]) == "string")
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