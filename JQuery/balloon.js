 //constante que recebe as cores (vermelho,verde,azul,vermelho)
    const mudar = ['red', 'green', 'blue'];

    //constante balão
    const balloon = $("#balloon");

    //tamanho inicial
    let tamanho = 200;

    //color vai receber o valor inicial (vermelho = 1)
    let color = 1;

    //inicia o timer para esvaziar o balão em null
    let timer = null;

    balloon.click(() => {
        balloon.css("background-color", mudar[color]);

        //color aumanet em 1 --pula para proxima
        color = color + 1;

        //se a color for a ultima cor (azul) --mudar-- retornará a primeira cor (vermelho)
        if (color >= mudar.length) {
            color = 0;
        }

        tamanho = tamanho + 10;
        if (tamanho >= 420) {
            alert('o balão explodiu! Mais cuidado na proxima');
            retorno();
            return;
        }
        balloon.css("width", tamanho + "px");
        balloon.css("height", tamanho + "px");
    });

    //função para retornar os valores originais do balão
    function retorno() {
        tamanho = 200;
        color = 1;
        balloon.css("width", tamanho + "px");
        balloon.css("height", tamanho + "px");
        balloon.css("background-color", "red");


        //resetar o timer que faz o balão esvaziar
        clearInterval(timer);
        timer = null;

    }

    //evento adicionado ---quando o cursor sair da div---
    balloon.mouseleave(() => {

        if (timer === null) {
            timer = setInterval(function () {
                  tamanho = tamanho - 5;

                //se o balão for menor ou igual a 199px enviará um alerta
                if (tamanho < 200) {
                    alert('o balão esvaziou tente clicar no balão para enche-lo');
                    retorno();
                    return;
                }

                balloon.css("width", tamanho +"px");
                balloon.css("height", tamanho + "px");


        //color aumanet em 1 --pula para proxima
        color = color - 1;

        //se a color for a ultima cor (azul) --mudar-- retornará a primeira cor (vermelho)
        if ( color < 0 ) {
            color = mudar.length - 1;
        }

         balloon.css("background-color", mudar[color]);

               }, 700);
             }
});

