
function num(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
function lowerletter(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function upperletter(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function symbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function fun1(){
    var arr = [];
    var a1 =document.getElementById("switch1").checked;
    var a2 =document.getElementById("switch2").checked;
    var a3 =document.getElementById("switch3").checked;
    var a4 =document.getElementById("switch4").checked;
    if(a1==true){
        arr.push(num);
    }
    if(a2==true){
        arr.push(upperletter);
    }
    if(a3==true){
        arr.push(lowerletter);
    }
    if(a4==true){
        arr.push(symbol);
    }
    
    return arr
}
function fun(){
    var arr = fun1();
    //console.log(arr);
    var j;
    var q = document.getElementById("quantity").value;
    var finresult = []
    for(j=0;j<q;j++){
        var result = [];
        const len = document.getElementById("lenpass").value;
        var i;
        for(i=0;i<len;i++){
            result.push(arr[Math.floor(Math.random() * arr.length)]())
        }
        finresult.push(result.join(""));
}
    document.getElementById("ans").value = finresult;
}




//copy
function copy() {
    var copyText = document.getElementById("ans");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//download

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    }

    function download1(){
        var text = "password : " + document.getElementById("ans").value;
        var filename = "password.txt";
        download(filename, text);
        //document.getElementById('demo') = text;
    }
