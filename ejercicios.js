//ejercicio1

/*let num = 300
let numeros = String(num)
let contador = parseInt(numeros.length)
if(contador == 3){
console.log("numero ingresado tiene 3 digitos")
}else{
console.log("numero ingresado no tiene 3 digitos")
}*/
//ejercicio2

let precio = 1000
if (precio >= 20.01 && precio <= 40.00){
    precio_total=precio+(precio*0.30)
    console.log("pago total con impuesto es  " + precio_total)   
}else if (precio >= 40.01 && precio <= 500.00){
    precio_total=precio+(precio*0.40)
    console.log("pago total con impuesto es  " + precio_total)   
}else if (precio >= 500.01){
    precio_total=precio+(precio*0.50)
    console.log("pago total con impuesto es  " + precio_total) 

}else{ 
console.log()
        
 }
  //ejercicio 3  
let clave = 50
let tiempo = 20
if (clave == 12 && tiempo < 30 ){
 precio = 2.00
 total = precio * tiempo 
 precio_total = total - (total * 0.10 )
 console.log(" el costo de su llamada a america del norte fue " + precio_total )
    
}else if (clave ==  15 && tiempo < 30 ){
    precio = 2.20
    total = precio * tiempo 
    precio_total = total - (total * 0.10 )
    console.log(" el costo de su llamada a america central fue " + precio_total )

    if (clave == 18 && tiempo < 30 ){
        precio = 4.50.
        total = precio * tiempo 
        precio_total = total - (total * 0.10 )
        console.log(" el costo de su llamada a america del sur fue " + precio_total )
           
       }
       
   } else if (clave == 19 && tiempo < 30 ){
    precio = 3.50
    total = precio * tiempo 
    precio_total = total - (total * 0.10 )
    console.log(" el costo de su llamada a Europa fue " + precio_total )
       
   } else if (clave == 23 && tiempo < 30 ){
    precio = 6.00
    total = precio * tiempo 
    precio_total = total - (total * 0.10 )
    console.log(" el costo de su llamada a asia  fue " + precio_total )
       
    }else if (clave == 25 && tiempo < 30 ){
        precio = 6.00
        total = precio * tiempo 
        precio_total = total - (total * 0.10 )
        console.log(" el costo de su llamada a Africa  fue " + precio_total )
           
        }else if (clave == 29 && tiempo < 30 ){
            precio = 5.00
            total = precio * tiempo 
            precio_total = total - (total * 0.10 )
            console.log(" el costo de su llamada a Oceania fue " + precio_total )
               
            }else{
            precio =2.00
            total = precio * tiempo
            console.log("el costo de su llamada no aplica descuento " + total )


            }
            //ejercicio4
            function tabla_multiplicar(num){
                var total;
                for(let i=1 ; i<=10 ; i++){ 
                    total=num*i
                    console.log("")
                    console.log(num+"x"+i+"="+total);
                    
                }
                
                 } 


    
/*ejercicio 5
   constarray = [ 10,20,45,32,54,80,2,9,32]
    let contador = 0;
    array.forEach(value => {
        if (value>= 18){
            contador++;
            
        }
        
    });*/
    console.log("total de personas mayores de edad: " + contador);
    //ejercicio6
    function notas(a , b , c) {
  

        nota_final1 = a * 0.20;
        nota_final2 = b  * 0.30;
        nota_final3 = c * 0.50;
        total = nota_final1 + nota_final2 + nota_final3 ;
      
        console.log( "su promedio de notas es "  + total)
      }
      notas(4 , 6 , 5)	
    
    //ejercicio7

const array = [ 1,3,4,4,9,2,2,9,3,10]
let contador = 0;
let contador2 = 0;
array.forEach(value => {
    if (value>= 5){
        contador++;
        
    }else if(value < 5){
     contador2++;
    }
    
});
console.log( "alumnos aprobados = " + contador);
console.log("alumnos reprobados = " + contador2)
  
// ejrcicio8
function  operacion_aritmetica( a , b){
        sumar = a + b ;
        restar = a - b;
        multiplicar = a + b ;
        dividir = a / b ;

        console.log(" el resultado de la suma es = " + sumar);
        console.log("el resultado de la resta es " + restar);
        console.log("el resultado de la multiplicación es " + multiplicar);
        console.log ("el resultado de la division es " + dividir)
       }
       operacion_aritmetica(6 , 2)




















  
  

