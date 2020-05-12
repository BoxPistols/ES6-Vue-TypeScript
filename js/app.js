document.title = '俺の' + document.title
/*
  let sec = prompt("N分は何秒？")
  document.write(60 * sec)
*/

/**
 * カレンダー
 */

// 定数today
const today = new Date()
const getMonth = today.getMonth() + 1
const getDate = today.getDate()
const getDay = today.getDay()
const getHours = today.getHours()
const getMinutes = today.getMinutes()
// const getEventDay = new Date(2020, 5, 12) 宣言の中に配列を入れる
const week = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土"
]
// break
r('<p></p>')

// el.insertAdjacentHTML('beforeend', `${getMonth} / ${getDate} (${getDay})`)
r(`${getMonth}/${getDate}(${week[getDay]}) ${getHours}:${getMinutes}`)

// break
r('<p></p>')
