$(function(){
    $("#bt1").click(adicionar);
    $("#bt2").click(adicionar2);
    $("#bt3").click(adicionar3);
    $("#bt4").click(adicionar4);
    $("#bt5").click(adicionar5);
    $("#bt6").click(adicionar6);
});


  
//item1 Arroz
function adicionar() {
    alert("Porção de arroz adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var rice = data.Pratos;
        var qtd = rice.length;
        for (var i = 0; i < qtd; i++)
        {
                     
            localStorage.setItem("Arroz",(rice[i].valor));
                        
        }
    });
  

}

//item2 Feijão
function adicionar2() {
    alert("Porção de feijão adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var beans = data.Prato2;
        var qtd2 = beans.length;
        for (var i = 0; i < qtd2; i++)
        {
            localStorage.setItem("Feijão",(beans[i].valor));

           
        }
    });
  

}

//item3 carne
function adicionar3() {
    alert("Porção de carne adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var meat = data.Prato3;
        var qtd3 = meat.length;
        for (var i = 0; i < qtd3; i++)
        {
         localStorage.setItem("Carne",(meat[i].valor));
            
        }
    });
  

}

//item4 Frango

function adicionar4() {
    alert("Porção de frango adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var chik = data.Prato4;
        var qtd4 = chik.length;
        for (var i = 0; i < qtd4; i++)
        {
        localStorage.setItem("Frango",parseFloat((chik[i].valor)));
            
        }
    });
  

}

//item 5 Batata Frita

function adicionar5() {
    alert("Porção de batata frita adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var batata = data.Prato5;
        var qtd5 = batata.length;
        for (var i = 0; i < qtd5; i++)
        {
            localStorage.setItem("Batata frita",parseFloat((batata[i].valor)));
          
        }
    });
  

}

//item 6 lata coca

function adicionar6() {

    alert("Lata coca-cola adicionado ao carrinho");
    $.getJSON("dados/produtos.json", function(data){
        
        var coca = data.Prato6;
        var qtd6 = coca.length;
        for (var i = 0; i < qtd6; i++)
        {
        localStorage.setItem("Coca-cola",parseFloat((coca[i].valor.toFixed(2))));
            
        }
    });
  

}



    
       