import 'whatwg-fetch'
import Rx from 'rxjs'

export const getDataFromUrl = (url) => Rx.Observable.fromPromise(fetch(url).then(res => res.json()))

