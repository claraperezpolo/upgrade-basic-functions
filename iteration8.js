const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(param) {
    var historico = [];  
    var repetidas = [];  
    var contador = 0;

    for (i=0; i < param.length;i++){  
        if(historico.includes(param[i])){
            repetidas.push(param[i]);
        } else {
            historico.push(param[i]);
                } 
    }

    for (i = 0; i < historico.length; i++){
        contador = 0;
        for (j=0; j< param.length; j++) {
            if (historico[i] == param[j]) {
                contador++;
            }
        }

        console.log(historico[i]+ " se repite: "+ contador +" veces.")
    }
}

  total = repeatCounter(counterWords);
  console.log(total);

