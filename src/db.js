import { init } from 'rxjs-couchdb'
import {  generateSaveTransaction } from 'conty.js'
const DB_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic bWg6bWgxMTIy',
  'User-Agent': 'request'
}

export const db = init('https://couchdb.ceibo.co/martin_hardoy', DB_HEADERS)

export const saveTransaction = generateSaveTransaction(db.put)
