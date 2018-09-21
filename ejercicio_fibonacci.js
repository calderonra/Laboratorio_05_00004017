    function fibo(x){
         cont=0;
         z=0; 
         y=1;
         w=0;
        do{ console.log(z);
            w=z+y;
            z=y;
            y=w;
            cont++ ;
        }
        while(cont<x);

    }

    
