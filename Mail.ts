export class mail{
    protected _direccion: string;
    protected _tipo: string;

    constructor (direccion:string, tipo: string){
        this._direccion=direccion;
        this._tipo=tipo;
    }

    getMail(): string {
        return `${this._direccion}, ${this._tipo}`;
      }
    public get direccion() : string {
        return this._direccion;

    }
    public get tipo() : string {
        return this._tipo;

    }
    
    public set direccion(v : string) {
        this._direccion = v;
    }

    
    public set tipo(v : string) {
        this._tipo = v;
    }
    
    


    


}