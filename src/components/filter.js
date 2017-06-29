import React from 'react'
import { connect } from 'react-redux'
import { updateSearchTextFilter } from '../actions/filters'
import Rx from 'rxjs'
// CSS FA
import '../vendor/font-awesome-4.7.0/css/font-awesome.min.css'
import './filter.css'

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
    return (
      <div className="filter">
        <span><i className="fa fa-search" aria-hidden="true"></i></span>
        <input id="searchText" type="text" placeholder="Buscar..." />
      </div>
      )
  }
}

const mapDispatchToProps = {
  onSearch: updateSearchTextFilter
}
export default connect(null, mapDispatchToProps)(Filters)