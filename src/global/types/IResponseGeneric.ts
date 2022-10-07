export interface IResponseGeneric<T> {
  exitoso: boolean;
  mensaje: string;
  estadoHttp: number;
  respuesta: T;
}
