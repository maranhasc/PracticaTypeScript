export class Telefono {
    protected _numero: string;
    protected _tipo: string;
  
    constructor(numero: string, tipo: string) {
      this._numero = numero;
      this._tipo = tipo;
    }
    getTelefono(): string {
        return `${this._numero}, ${this._tipo}`;
      }

    
    public get numero() : string {
        return this._numero;
    }

    
    public set numero(value : string) {
        this._numero = value;
    }
    
    
    public get tipo() : string {
        return this._tipo;
    }
    
    
    public set tipo(value : string) {
        this._tipo = value;
    }
    
    
  
   
  }