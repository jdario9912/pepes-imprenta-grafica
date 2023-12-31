export interface IdParam {
  id: string
}

export interface IdProductoParam extends IdParam {
  producto: enums.Productos;
}