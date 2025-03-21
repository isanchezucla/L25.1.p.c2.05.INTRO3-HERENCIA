export default class Cl_empleado {
    constructor(sueldoBase) {
        this._sueldoBase = sueldoBase
    }
calcularSueldo(){
    return this._sueldoBase;
    }   
}