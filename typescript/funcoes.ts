//Criando funções em typescript

function retornoSemParametros () : string{
    return 'função criada';
}

function retornoComParametros(ativar :boolean) : string{
    return ativar ? 'ATIVADO' : 'DESATIVADO';
}

function voidSemParametros() : void{
    console.log('Função sem retorno e sem parametros')
}

function voidComParametros(ativar : boolean) : void {
    console.log(ativar ? 'ATIVADO - VOID' : 'DESATIVADO - VOID');
}

console.log(retornoSemParametros());
console.log(retornoComParametros(true));
voidSemParametros();
voidComParametros(false);

//Parâmetros no typescript são obrigatórios - O compilador avisa sobre isso!
//Mas tem como faze-lo opcional
let funcoesComParametroOpcional = function(opcional? : string) : void{
    if(opcional !== undefined){
        console.log(opcional);
    } else {
        console.log('Não foi informado nada');
    }
}

let funcoesComParametroOpcionalArrow = (variavel:string) => console.log('oiiiii '+variavel);

funcoesComParametroOpcional('test');

//Parametros REST

function parametrosRest(...valores : number[]):void{
    valores.forEach(v => console.log('Valor = '+v));
}

parametrosRest(1,2,3,4,5);
