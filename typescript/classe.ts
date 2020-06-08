class Nave {
    private atributo : string;

    constructor(valor:string){
        this.atributo = valor;
    }

    public imprimirValor () {
        console.log(this.atributo);
    }
}

let enterprise = new Nave('Comboio');
enterprise.imprimirValor();
//Herança
class Entersector extends Nave{
    constructor(){
        super('Comboio - Extersector');
    }
}

let entersector = new Entersector();
entersector.imprimirValor();

export {Nave, Entersector};