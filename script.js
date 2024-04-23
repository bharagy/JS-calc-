
function append(value){
    document.getElementById("result").value
    +=value;
}

function Clear(){
    document.getElementById("result").value
    ="";
}

function Calculate(){
    const result= document.getElementById("result").value
    const output=eval(result);
    document.getElementById("result").value=output;
}