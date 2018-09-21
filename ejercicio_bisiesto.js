function bisiesto(x){
     if ((x % 4 == 0) && ((x % 100 != 0) || (x % 400 == 0))){
        return console.log("es bisiesto");

    }
    else if(x%4 !=0) {
        return console.log("no es bisiesto");
    }
}