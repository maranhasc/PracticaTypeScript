export class Direccion {
    protected _calle: string;
    protected _numero:number;
    protected _piso:number;
    protected _letra: string;
    protected _codigopostal: number;
    protected _poblacion: string;
    protected _provincia: string;


    constructor(calle: string, numero:number, piso:number, letra: string, codigopostal: number, poblacion: string, provincia: string ){
        this._calle=calle;
        this._codigopostal=codigopostal;
        this._letra=letra;
        this._numero=numero;
        this._piso=piso;
        this._poblacion=poblacion;
        this._provincia=provincia;
    }

    
    public get calle() : string {
        return this._calle
    }

    
    public set calle(value : string) {
        this._calle=value;
    }
    
    public get numero() : number {
        return this._numero
    }

    
    public set numero(value : number) {
        this._numero=value;
    }
    
    public get piso() : number {
        return this._piso
    }

    
    public set piso(value : number) {
        this._piso=value;
    }
    
    public get letra() : string {
        return this._letra
    }

    
    public set letra(value : string) {
        this._letra=value;
    }
    
    public get codigopostal() : number {
        return this._codigopostal
    }

    
    public set codigopostal(value : number) {
        this._codigopostal=value;
    }
    
    public get poblacion() : string {
        return this._poblacion
    }

    
    public set poblacion(value : string) {
        this._poblacion=value;
    }
    
    public get provincia() : string {
        return this._provincia
    }

    
    public set provincia(value : string) {
        this._provincia=value;
    }
    
    getDireccion(): string {
        return `${this._calle}, ${this._numero},${this._piso},${this._letra},${this._codigopostal},${this._poblacion},${this._provincia},`;
      }

    



}