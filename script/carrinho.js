window.onload = function(){

    recuperarcarrinho();
}

$(function(){

    $("#limpar").click(limparcarrinho);

});

function limparcarrinho(){

     var del =   localStorage.clear(localStorage.key(i)); 
     $(".remove").remove(del);
     location.reload();
        
        
    }
 


function recuperarcarrinho(){

    var total = 0;
    var valor = 0;

    var qtd = localStorage.length;

    for(i = 0; i < qtd; i++){
        
        var add = '<div>'+ "R$" + localStorage.getItem(localStorage.key(i));+ '</div><br>'
        $("#precos").append(add);
        var ad = '<div>'+ localStorage.key(i);'</div><br>'
        $("#pratos").append(ad);

        valor = parseFloat(localStorage.getItem(localStorage.key(i)));
        total = (total + valor);
        document.getElementById("total").innerHTML = total.toFixed(2); 
      

    }

}