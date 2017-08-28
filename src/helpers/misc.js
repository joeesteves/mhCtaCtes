export const todayString = new Date().toISOString().slice(0,10)
export const roundTwo = (valor) => Math.round(valor * 100) / 100

export const formatDate = (date) => new Date(date).toISOString().slice(0,10).split('-').reverse().join('/')