var Result="";
var table=1;

function apertaDireita() {
    if(Result == ""){
    Result += "Direita";
    
    }else{
        Result += ", Direita";
    }

    document.getElementById("lado").innerHTML = "Direção = " + Result;

    if(table != 4 && table != 8 && table != 12 && table != 16){
        table+=1
    }
    
}

function apertaEsquerda() {
    if(Result == ""){
    Result += "Esquerda";
        
    }else{
    Result += ", Esquerda";
    }

    document.getElementById("lado").innerHTML = "Direção = " + Result;

    if(table != 1 && table != 5 && table != 9 && table != 13){
        table-=1
    }
   
}

function apertaCima() {
    if(Result == ""){
    Result += "Cima";
        
    }else{
     Result += ", Cima";
    }

    document.getElementById("lado").innerHTML = "Direção = " + Result;

    if(table != 1 && table != 2 && table != 3 &&table != 4){
        table-=4
    }

}

function apertaBaixo() {
    if(Result == ""){
    Result += "Baixo";
        
    }else{
    Result += ", Baixo";
    }

    document.getElementById("lado").innerHTML = "Direção = " + Result;

    if(table != 13 && table != 14 && table != 15 && table != 16){
        table+=4
    }
    
}

function colocaResult() {

    document.getElementById("URL").src = "http://127.0.0.1:5000/division?num1=2&num2=3";
    document.getElementById("resultado").innerHTML = "Lugar = "+table;
    Result="";
    document.getElementById("lado").innerHTML = "Direção = ";
    document.getElementById("roverIMG").src = "Table"+table+".png";
}