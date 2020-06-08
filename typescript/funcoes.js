//Criando funções em typescript
function retornoSemParametros() {
    return 'função criada';
}
function retornoComParametros(ativar) {
    return ativar ? 'ATIVADO' : 'DESATIVADO';
}
function voidSemParametros() {
    console.log('Função sem retorno e sem parametros');
}
function voidComParametros(ativar) {
    console.log(ativar ? 'ATIVADO - VOID' : 'DESATIVADO - VOID');
}
console.log(retornoSemParametros());
console.log(retornoComParametros(true));
voidSemParametros();
voidComParametros(false);
//Parâmetros no typescript são obrigatórios - O compilador avisa sobre isso!
//Mas tem como faze-lo opcional
var funcoesComParametroOpcional = function (opcional) {
    if (opcional !== undefined) {
        console.log(opcional);
    }
    else {
        console.log('Não foi informado nada');
    }
};
var funcoesComParametroOpcionalArrow = function (variavel) { return console.log('oiiiii ' + variavel); };
funcoesComParametroOpcional('test');
//Parametros REST
function parametrosRest() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i - 0] = arguments[_i];
    }
    valores.forEach(function (v) { return console.log('Valor = ' + v); });
}
parametrosRest(1, 2, 3, 4, 5);
