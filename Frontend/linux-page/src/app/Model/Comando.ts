export class Comando {

    id?:number
    nombre:string
    categoria:string
    descripcion:string

    public constructor(nombre:string,categoria:string,descripcion:string)
    {
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
    }

}