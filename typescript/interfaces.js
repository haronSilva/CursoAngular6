var Casa = (function () {
    function Casa(qtdQuartos) {
        this.quantidadeCompartimentos = qtdQuartos;
    }
    Casa.prototype.imprimirCompartimentos = function () {
        console.log("Quantidade de quartos: " + this.quantidadeCompartimentos);
    };
    return Casa;
})();
var bangalow = new Casa(5);
bangalow.imprimirCompartimentos();
