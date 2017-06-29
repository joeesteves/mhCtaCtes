import React from 'react'
import { connect } from 'react-redux'
import { updateSearchTextFilter } from '../actions/filters'
import Rx from 'rxjs'

class Filters extends React.Component {
  componentDidMount() {
    Rx.Observable.fromEvent(document.getElementById('searchText'), 'keyup')
      .debounce(() => Rx.Observable.timer(200))
      .subscribe(this.handleOnSearch.bind(this))
  }

  handleOnSearch(se) {
    console.log(se.target.value)
    this.props.onSearch(se.target.value)
  }

  render() {
    return <input id="searchText" type="text" placeholder="Buscar..." />
  }
}

const mapDispatchToProps = {
  onSearch: updateSearchTextFilter
}
export default connect(null, mapDispatchToProps)(Filters)