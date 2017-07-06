import { Maybe } from 'ramda-fantasy'
import { cleanProductoActivo } from '../actions/productoActivo'
import { store } from '../store'
export const hotkeys = () => {
  document.addEventListener('keydown', e => {
    Maybe(e.keyCode)
      .map(kc => kc === 27 ? store.dispatch(cleanProductoActivo()) : null)
  })
}