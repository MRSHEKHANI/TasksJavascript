let menu = {
    width: 200,
    height:300,
    title: "newTitle"
};

function multiplyNumeric(obj){
    for (let keys in obj){
        if(typeof [keys] == "number"){
            obj[keys] *=2; 
        }
    }
}

multiplyNumeric(menu);

