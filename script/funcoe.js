window.onload = function(){
    exibirMenu();
    
}
//JSON
$(function(){
    exibirCompras();
});

function exibirCompras() {
    $.getJSON("dados/produtos.json", function(data){

       var rice = data.Pratos;
       var qtd = rice.length;
        for (var i = 0; i < qtd; i++)
        {
            var legenda = '<figcation>' + rice[i].nome + '<br>' + "R$"+  rice[i].valor +'</figcation>'
            $("#arroz").append(legenda);
        }

        var beans = data.Prato2;
        var qtd2 = beans.length;
        for(var i = 0; i < qtd2; i++){
            var legenda2 = '<figcation>' + beans[i].nome + '<br>' + "R$"+  beans[i].valor +'</figcation>'
            $("#feijao").append(legenda2);
        }
        var meat = data.Prato3;
        var qtd3 = meat.length;
        for(var i = 0; i < qtd3; i++){
            var legenda3 = '<figcation>' + meat[i].nome + '<br>' + "R$"+  meat[i].valor +'</figcation>'
            $("#carne").append(legenda3);
        }
        var chik = data.Prato4;
        var qtd4 = chik.length;
        for(var i = 0; i < qtd4; i++){
            var legenda4 = '<figcation>' + chik[i].nome + '<br>' + "R$"+  chik[i].valor +'</figcation>'
            $("#frango").append(legenda4);
        }
        var po = data.Prato5;
        var qtd5 = po.length;
        for(var i = 0; i < qtd5; i++){
            var legenda5 = '<figcation>' + po[i].nome + '<br>' + "R$"+  po[i].valor +'</figcation>'
            $("#batata").append(legenda5);
        }
        var coca = data.Prato6;
        var qtd6 = coca.length;
        for(var i = 0; i < qtd6; i++){
            var legenda6 = '<figcation>' + coca[i].nome + '<br>' + "R$"+  coca[i].valor +'</figcation>'
            $("#coca").append(legenda6);
        }
    });   
}

//XML
function exibirMenu() {
    $.ajax({
        url: "dados/menu.xml",
        success: function (xml) {
            $(xml).find("opcao").each(function () {
                var link = '<nav  Class="menup"><h1>'  + $(this).text() + '</h1></nav>';
                $("#menu").append(link);
            });

            $(xml).find("produtos").each(function(){
                var link =  '<nav><a href="index.html" Class="menu">'  + $(this).text() +'</a></nav>';
                $("#produtos").append(link);
            });
            $(xml).find("carrinho").each(function(){
                var link = '<nav><a href="carrinho.html" Class="menu">' + $(this).text() + '</a></nav><br>';
                $("#carrinho").append(link);
            });
        },
        error: function () {
            alert("Mensagem de erro.");
        }
    });
}

