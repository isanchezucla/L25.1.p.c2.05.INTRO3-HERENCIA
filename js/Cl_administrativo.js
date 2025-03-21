import Cl_empleado from "./Cl_empleado.js";

export default class Cl_adminitrativo extends Cl_empleado {
    constructor(sueldoBase, primaFija) {
        super(sueldoBase);
        this._primaFija = primaFija;
    }
calcularSueldo() {
    return this._sueldoBase + this._primaFija;
    }
}