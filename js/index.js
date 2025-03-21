/* INTRO3-HERENCIA
Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(), 
que sólo retorna sueldoBase. La clase Cl_obrero hereda de Cl_empleado y también 
tiene horas extras a $2 cada una; la clase Cl_administrativo hereda de Cl_empleado y 
tiene una prima fija. El método calcularSueldo() debe hacer lo indicado en cada clase hija.
Ejemplo:
- calcularSueldo() en obrero es: this.sueldoBase + this.horasExtras * 2
- calcularSueldo() en administrativo es: this.sueldoBase + this.primaFija 
*/

import Cl_obrero from "./Cl_obrero.js";
import Cl_administrativo from "./Cl_administrativo.js";

export default class Cl_index {
    constructor() {
        let administrativo1 = new Cl_administrativo(1000, 250);
        let obrero1 = new Cl_obrero(750, 40);
        let administrativo2 = new Cl_administrativo(1200, 500);
        let obrero2 = new Cl_obrero(900, 20);
    }
}