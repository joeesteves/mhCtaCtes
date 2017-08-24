import { init } from 'rxjs-couchdb'
import {  generateSaveTransaction } from 'conty.js'
const DB_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic am9zZTphbGZhMTM0Ng==',
  'User-Agent': 'request'
}

export const db = init('http://db.ceibo.co/martin_hardoy', DB_HEADERS)

export const saveTransaction = generateSaveTransaction(db.put)