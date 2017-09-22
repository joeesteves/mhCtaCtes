export const productosActions = {
  fetch: 'PRODUCTOS_FETCH',
  populate: 'PRODUCTOS_POPULATE'
}

export const filtersActions = {
  updateSearchText: 'SEARCH_TEXT_UPDATE',
  cleanFilter: 'FILTER_CLEAN'
}

export const productoActivoActions = {
  fill: 'PRODUCTO_ACTIVO_FILL',
  clean: 'PRODUCTO_ACTIVO_CLEAN',
  update: 'PRODUCTO_ACTIVO_UPDATE'
}

export const transaccionesActions = {
  fetch: 'TRANSACCIONES_FETCH',
  populate: 'TRANSACCIONES_POPULATE',
  delete: 'TRANSACCION_DELETE'
}

export const loggedIn = {
  admin: 'ADMIN_LOGGEDIN',
  seller: 'SELLER_LOGGEDIN'
}

export const balanceActions = {
  build: 'BALANCE_BUILD'
}

export const movimientosActions = {
  populate: 'MOVIMIENTOS_POPULATE',
  create: 'MOVIMIENTO_CREATE',
  delete: 'MOVIMIENTO_DELETE'
}