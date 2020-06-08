var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nave = (function () {
    function Nave(valor) {
        this.atributo = valor;
    }
    Nave.prototype.imprimirValor = function () {
        console.log(this.atributo);
    };
    return Nave;
})();
exports.Nave = Nave;
var enterprise = new Nave('Comboio');
enterprise.imprimirValor();
//Herança
var Entersector = (function (_super) {
    __extends(Entersector, _super);
    function Entersector() {
        _super.call(this, 'Comboio - Extersector');
    }
    return Entersector;
})(Nave);
exports.Entersector = Entersector;
var entersector = new Entersector();
entersector.imprimirValor();
