function binario(x){ 
    var division=0; 
    var binario=[]; 
    
    do { 
        division=x/2; 
        if (x%2==0) { 
            binario.unshift("0"); 
        } 
        else { 
            binario.unshift("1"); 
        } 

        x=Math.floor(division); 

        }
        while(x >= 1); 
        aux=binario.join(""); 
        console.log(aux);     
    } 

