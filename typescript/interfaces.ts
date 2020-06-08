interface Comodos{
    quantidadeCompartimentos : number;
}

class Casa implements Comodos{
    quantidadeCompartimentos : number;

    constructor(qtdQuartos:number){
        this.quantidadeCompartimentos = qtdQuartos;
    }

    public imprimirCompartimentos(){
        console.log(`Quantidade de quartos: ${this.quantidadeCompartimentos}`);
    }
}

let bangalow = new Casa(5);
bangalow.imprimirCompartimentos();