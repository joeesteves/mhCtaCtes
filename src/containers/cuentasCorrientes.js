import React, { Component } from 'react'
import { connect } from 'react-redux'
//Actions
import { fetchTransacciones } from '../actions/transacciones'
import { fetchMovimientos } from '../actions/movimientos'
import { cleanFilter } from '../actions/filters'

//Components
import Balance from '../components/balance'

//CSS
import './productosContainer.css'

// Constants
const mapAccountIds = {
  "Comisiones a Pagar": "Mis Comisiones",
  "Efectivo Carcamo": "Mi Caja"
}

class CuentasCorrientesContainer extends Component {
  componentDidMount() {
    fetchTransacciones()
    fetchMovimientos()
    cleanFilter()
  }

  render() {
    return (
      <div className="table">
        {/* <Filter /> */}
        <div className="balance">
          {
            this.props.balance
              .filter(balance => !this.props.filter || this.props.filter.reduce((p,c) => p || balance.accountId === c, false))
              .map(balance => {
                if(this.props.filter){
                  return <Balance {...balance} name={mapAccountIds[balance.accountId]} />
                }
              return <Balance {...balance} />
            })
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  balance: state.balance
})

// const filterTransacciones = (transacciones, filters) => {
//   if (filters.length === 0) return transacciones
//   return filterTransacciones(Maybe(filters[0].value)
//     .map(value => transacciones.filter(transaccion => new RegExp(value, "i").test(transaccion.date + transaccion.nombre + transaccion.date + transaccion.enviadoPor + transaccion.metodoPago)))
//     .getOrElse(transacciones), filters.slice(1))
// }

export default connect(
  mapStateToProps, null
)(CuentasCorrientesContainer)