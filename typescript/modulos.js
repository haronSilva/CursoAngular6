//usando a sintaxe export vc será capaz de exportar as classes e outros componentes externamente. (check class.ts)
//O uso da sintaxe import vc importará tudo que vc exportou anteriormente.
var classe_1 = require('./classe');
var _ = require('lodash');
console.log(_.pad('Typescript examples', 40, "="));
var enterc = new classe_1.Entersector();
enterc.imprimirValor();
