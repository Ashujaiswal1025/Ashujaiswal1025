var result = document.getElementById("res");

function update(val){
    if(result.value === val){
        return -1;
    }
    result.value += val;
}

function clearInput(){
    result.value = " ";
}

function calculate(){
    try{
        result.value = eval(result.value);
        result.style.color = "green";
        update(result.value);
    }catch(error){
        result.value = "Error";
        result.style.color = "red";
    }
    // if(event.key)
    //     clearInput();
}

function keyFunc(){
    if(event.key === 'Enter')
       calculate();
}

console.log(result.length);