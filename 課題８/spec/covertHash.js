function toUry(hash){
 
    for(let key in hash){
        if(key == "text"){
            while (hash[key].match("foo")!=null){
                hash[key] = hash[key].replace("foo", "uryyyy!!");
            }
        }else{
            toUry(hash[key]);
        }
    }

    return hash;
}