

function insert(num){

    const result = document.getElementById("result").innerHTML;

    if(result === '0'){
        document.getElementById("result").innerHTML = num;
    }else{
        document.getElementById("result").innerHTML = result + num;
    }

}

function calculate(){

    const result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = '0';
    }

}

function back(){

    const result = document.getElementById("result").innerHTML;

    if(result.length > 1){
        document.getElementById("result").innerHTML = result.substring(0, result.length-1);
    }else{
        document.getElementById("result").innerHTML = '0';
    }
}

function clean(){
    document.getElementById("result").innerHTML = 0;
}