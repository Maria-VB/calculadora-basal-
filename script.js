const FLUJO= document.getElementById("flu")

const BUTTON= document.getElementById("calcular");
console.log(BUTTON)
const INPUT= document.getElementById("peso");
const ERROR= document.getElementById("error")

BUTTON.addEventListener("click", ()=>{
    let peso= INPUT.value;
    if(peso=== " "){
        ERROR.style.display="block";
    } else if (peso<=30){
        FLUJO.innerHTML= holliday(peso)+ " cc";
        FLUJO.style.display="block";
        ERROR.style.display="none"
    } else if ( peso>30) {
        let sc = superficieCorporal(peso)
        FLUJO.innerHTML=sc[0] +" cc";
        FLUJO.style.display="block";
        ERROR.style.display="none";
    }

});

  function holliday(peso){
    let resultado = 0;
    if (peso<=10){
        resultado= peso*100;
    }
        else if(peso<=20){
            resultado = 1000 + (peso - 10) * 50;

    } 
         else if (peso<=30){
        resultado= 1500 + (peso-20) * 20;
    }
    
    return resultado
} 

function superficieCorporal(peso){
    let superficieCorporal= ( (peso*4)+ 7)/(peso+90);
    return [(superficieCorporal*1500), (superficieCorporal*2000). tof]
}

  
