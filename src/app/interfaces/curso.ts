import { modulo } from "./modulo";
export interface curso{
    clavecurso:number;
    profesor:String;
    nombrecurso:String;
    descripcion:String;
    modulos:Array<modulo>;
}