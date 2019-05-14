function divisores(){
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let result = document.getElementById("result");

    let va = parseInt(n1.value);
    let vb = parseInt(n2.value);

    var div = [1];
    if(va>vb){
        var aux = va;
        va = vb;
        vb = aux;
    }


    
    for(var i=2; i<vb; i++){
        if(va%i == 0 && vb%i == 0){
            div.push(i);
        }
    }
    result.innerHTML = div;
   
}