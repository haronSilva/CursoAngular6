//usando a sintaxe export vc será capaz de exportar as classes e outros componentes externamente. (check class.ts)
//O uso da sintaxe import vc importará tudo que vc exportou anteriormente.

import{Nave, Entersector} from './classe'
import * as _ from 'lodash'

console.log(_.pad('Typescript examples', 40, "="));
let enterc = new Entersector();
enterc.imprimirValor();

