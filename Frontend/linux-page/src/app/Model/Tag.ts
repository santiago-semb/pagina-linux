export class Tag {

    id?:number
    tag:string
    comando:string
    descripcion:string

    public constructor(tag:string,comando:string,descripcion:string)
    {
        this.tag = tag
        this.comando = comando
        this.descripcion = descripcion
    }

}