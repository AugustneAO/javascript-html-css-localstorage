
function verificarResultado() {
  

    // inicializando variáveis pra pegar o valor dos campos referidos: num1, num2
    primeiroNum = document.meuForm.num1.value;
    segundoNum = document.meuForm.num2.value;
    // inicializando variáveis pra pegar o valor dos campos referidos: operacao, advinha

    operador = document.meuForm.operacao.value;
    advinhaResultado = document.meuForm.advinha.value;

    if (primeiroNum && segundoNum && operador && advinhaResultado) {


    } else {
        document.getElementById('messange').innerHTML = '<i style="color:red;">Sem dados pra analisar';

    }

    if (operador == '+') {

        var resultado = parseInt(primeiroNum) + parseInt(segundoNum);
        if (advinhaResultado == resultado) {
           
            
           var w = {
            qts: 5
           };
           var a = [];
           a = JSON.parse(localStorage.getItem('pontos')) || [];
           a.push(w);
           
           localStorage.setItem('pontos', JSON.stringify(a));
           var pontos = localStorage.getItem('pontos');
 
           dados = JSON.parse(localStorage.getItem('pontos'));
           console.log('mau', dados);
               
            total = dados.reduce((i,j)=> i + j.qts + 0,0);
           console.log('Total', total);

           document.getElementById('messange').innerHTML = '<b  style="color:white; background: green;"> Parabéns';
           document.getElementById('pontucao').innerHTML = '<b  style="color:white; background: green;"> +5';
           document.getElementById('total').innerHTML = '<b style="color:white; background: green;  font: 1em sans-serif;"">' + total;
           document.getElementById('bigTotal').innerHTML = '<b style="color:white;   font: 1em sans-serif;"">' + total;
          
           if(total >= 100){

            document.getElementById('sms').innerHTML= '<b style="color:white; background: green;"> Pontuação excelente 😍😍😘';

        }
        if(total < 10){

            document.getElementById('sms').innerHTML= '';

        }
        if(total < 100){

            document.getElementById('sms').innerHTML= '';

        }
      
          //bigTotal

        } else {
            var dados = JSON.parse(localStorage.getItem('pontos'));
            console.log('mau', dados);
            var inde = 0;
            dados.splice(inde, 1);

            localStorage.setItem('pontos', JSON.stringify(dados));

                
             total = dados.reduce((i,j)=> i + j.qts + 0,0);
            console.log('Total', total);
            document.getElementById('messange').innerHTML = '<b  style="color:red; background: white;">Errado, tente mais uma vez';
            document.getElementById('pontucao').innerHTML = '<b  style="color:red; background: white;"> -5';

            document.getElementById('total').innerHTML = '<b style: style="color:white; background: green; border-bottom: 1px solid red; font: 1em sans-serif;">' + total;
            document.getElementById('bigTotal').innerHTML = '<b style="color:white;  font: 1em sans-serif;"">' + total;
            if(total >= 100){

                document.getElementById('sms').innerHTML= '<b style="color:red; background: green;"> Continue firme 😃';
    
            }
            if(total < 100){

                document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> Os pontos estão caindo 😪';
    
            }
            if(total < 10){

                document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> 😪😪😪';
    
            }
           

        }
    }

    if (operador == '/') {
        var resultado = parseInt(primeiroNum) / parseInt(segundoNum);
        if (advinhaResultado == resultado) {
           
            
            var w = {
             qts: 5
            };
            var a = [];
            a = JSON.parse(localStorage.getItem('pontos')) || [];
            a.push(w);
            
            localStorage.setItem('pontos', JSON.stringify(a));
            var pontos = localStorage.getItem('pontos');
  
            dados = JSON.parse(localStorage.getItem('pontos'));
            console.log('mau', dados);
                
             total = dados.reduce((i,j)=> i + j.qts + 0,0);
            console.log('Total', total);
 
            document.getElementById('messange').innerHTML = '<b  style="color:white; background: green;"> Parabéns';
            document.getElementById('pontucao').innerHTML = '<b  style="color:white; background: green;"> +5';
            document.getElementById('total').innerHTML = '<b style="color:white; background: green;  font: 1em sans-serif;"">' + total;
            document.getElementById('bigTotal').innerHTML = '<b style="color:white;   font: 1em sans-serif;"">' + total;
           
            if(total >= 100){
 
             document.getElementById('sms').innerHTML= '<b style="color:white; background: green;"> Pontuação excelente 😍😍😘';
 
         }
         if(total < 10){
 
             document.getElementById('sms').innerHTML= '';
 
         }
         if(total < 100){
 
            document.getElementById('sms').innerHTML= '';

        }
       
           //bigTotal
 
         } else {
             var dados = JSON.parse(localStorage.getItem('pontos'));
             console.log('mau', dados);
             var inde = 0;
             dados.splice(inde, 1);
 
             localStorage.setItem('pontos', JSON.stringify(dados));
 
                 
              total = dados.reduce((i,j)=> i + j.qts + 0,0);
             console.log('Total', total);
             document.getElementById('messange').innerHTML = '<b  style="color:red; background: white;">Errado, tente mais uma vez';
             document.getElementById('pontucao').innerHTML = '<b  style="color:red; background: white;"> -5';
 
             document.getElementById('total').innerHTML = '<b style: style="color:white; background: green; border-bottom: 1px solid red; font: 1em sans-serif;">' + total;
             document.getElementById('bigTotal').innerHTML = '<b style="color:white;  font: 1em sans-serif;"">' + total;
             if(total >= 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: green;"> Continue firme 😃';
     
             }
             if(total < 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> Os pontos estão caindo 😪';
     
             }
             if(total < 10){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> 😪😪😪';
     
             }
            
 
         }
    }

    if (operador == '*') {
        var resultado = parseInt(primeiroNum) * parseInt(segundoNum);
        if (advinhaResultado == resultado) {
           
            
            var w = {
             qts: 5
            };
            var a = [];
            a = JSON.parse(localStorage.getItem('pontos')) || [];
            a.push(w);
            
            localStorage.setItem('pontos', JSON.stringify(a));
            var pontos = localStorage.getItem('pontos');
  
            dados = JSON.parse(localStorage.getItem('pontos'));
            console.log('mau', dados);
                
             total = dados.reduce((i,j)=> i + j.qts + 0,0);
            console.log('Total', total);
 
            document.getElementById('messange').innerHTML = '<b  style="color:white; background: green;"> Parabéns';
            document.getElementById('pontucao').innerHTML = '<b  style="color:white; background: green;"> +5';
            document.getElementById('total').innerHTML = '<b style="color:white; background: green;  font: 1em sans-serif;"">' + total;
            document.getElementById('bigTotal').innerHTML = '<b style="color:white;   font: 1em sans-serif;"">' + total;
            if(total < 100){
 
                document.getElementById('sms').innerHTML= '';
    
            }
           
            if(total >= 100){
 
             document.getElementById('sms').innerHTML= '<b style="color:white; background: green;"> Pontuação excelente 😍😍😘';
 
         }
         if(total < 10){
 
             document.getElementById('sms').innerHTML= '';
 
         }
       
           //bigTotal
 
         } else {
             var dados = JSON.parse(localStorage.getItem('pontos'));
             console.log('mau', dados);
             var inde = 0;
             dados.splice(inde, 1);
 
             localStorage.setItem('pontos', JSON.stringify(dados));
 
                 
              total = dados.reduce((i,j)=> i + j.qts + 0,0);
             console.log('Total', total);
             document.getElementById('messange').innerHTML = '<b  style="color:red; background: white;">Errado, tente mais uma vez';
             document.getElementById('pontucao').innerHTML = '<b  style="color:red; background: white;"> -5';
 
             document.getElementById('total').innerHTML = '<b style: style="color:white; background: green; border-bottom: 1px solid red; font: 1em sans-serif;">' + total;
             document.getElementById('bigTotal').innerHTML = '<b style="color:white;  font: 1em sans-serif;"">' + total;
             if(total >= 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: green;"> Continue firme 😃';
     
             }
             if(total < 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> Os pontos estão caindo 😪';
     
             }
             if(total < 10){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> 😪😪😪';
     
             }
            
 
         }

    }

    if (operador == '-') {
        var resultado = parseInt(primeiroNum) - parseInt(segundoNum);
        if (advinhaResultado == resultado) {
           
            
            var w = {
             qts: 5
            };
            var a = [];
            a = JSON.parse(localStorage.getItem('pontos')) || [];
            a.push(w);
            
            localStorage.setItem('pontos', JSON.stringify(a));
            var pontos = localStorage.getItem('pontos');
  
            dados = JSON.parse(localStorage.getItem('pontos'));
            console.log('mau', dados);
                
             total = dados.reduce((i,j)=> i + j.qts + 0,0);
            console.log('Total', total);
 
            document.getElementById('messange').innerHTML = '<b  style="color:white; background: green;"> Parabéns';
            document.getElementById('pontucao').innerHTML = '<b  style="color:white; background: green;"> +5';
            document.getElementById('total').innerHTML = '<b style="color:white; background: green;  font: 1em sans-serif;"">' + total;
            document.getElementById('bigTotal').innerHTML = '<b style="color:white;   font: 1em sans-serif;"">' + total;
            if(total < 100){
 
                document.getElementById('sms').innerHTML= '';
    
            }
           
            if(total >= 100){
 
             document.getElementById('sms').innerHTML= '<b style="color:white; background: green;"> Pontuação excelente 😍😍😘';
 
         }
         if(total < 10){
 
             document.getElementById('sms').innerHTML= '';
 
         }
       
           //bigTotal
 
         } else {
             var dados = JSON.parse(localStorage.getItem('pontos'));
             console.log('mau', dados);
             var inde = 0;
             dados.splice(inde, 1);
 
             localStorage.setItem('pontos', JSON.stringify(dados));
 
                 
              total = dados.reduce((i,j)=> i + j.qts + 0,0);
             console.log('Total', total);
             document.getElementById('messange').innerHTML = '<b  style="color:red; background: white;">Errado, tente mais uma vez';
             document.getElementById('pontucao').innerHTML = '<b  style="color:red; background: white;"> -5';
 
             document.getElementById('total').innerHTML = '<b style: style="color:white; background: green; border-bottom: 1px solid red; font: 1em sans-serif;">' + total;
             document.getElementById('bigTotal').innerHTML = '<b style="color:white;  font: 1em sans-serif;"">' + total;
             if(total >= 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: green;"> Continue firme 😃';
     
             }
             if(total < 100){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> Os pontos estão caindo 😪';
     
             }
             if(total < 10){
 
                 document.getElementById('sms').innerHTML= '<b style="color:red; background: white;"> 😪😪😪';
     
             }
            
 
         }

    }


}

function reiniciar() {

    primeiroNum = document.meuForm.num1.value = '';
    segundoNum = document.meuForm.num2.value = '';


    operador = document.meuForm.operacao.value = '';
    advinhaResultado = document.meuForm.advinha.value = '';

    document.getElementById('messange').innerHTML = '';
    document.getElementById('pontucao').innerHTML = '';

    localStorage.removeItem('pontos');
    document.getElementById('sms').innerHTML= '';
    document.getElementById('bigTotal').innerHTML = '<b style="color:white;  font: 1em sans-serif;"> 00';
    document.getElementById('total').innerHTML = '<b style: style="color:white; border-bottom: 1px solid red; font: 1em sans-serif;"> 0';





}
