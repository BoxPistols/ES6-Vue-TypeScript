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
//r(week) break
r('<p></p>')

// el.insertAdjacentHTML('beforeend', `${getMonth} / ${getDate} (${getDay})`)
r(`${getMonth}/${getDate}(${week[getDay]}) _ ${getHours}:${getMinutes}`)

// break
r('<p></p>')

/**
* 回答の範囲を条件づけ
*/

/* let numQuest = prompt('1 - 10で')
if (numQuest >= 1 && numQuest <= 10) {
  r('OK!')
} else {
  r('NO!')
} */

// break r('<p></p>')

/**
 *  while文
 */
/* let dayLoop = 1
while (dayLoop <= 12) {
  console.log(dayLoop)
  // dayLoop += 1
  r('<span>' + dayLoop + '</span>.')
  dayLoop ++
} */

// break
r('<p></p>')

/**
 * for文
 */
/* for (let forLoop = 1; forLoop <= 12; forLoop++) {
  r(forLoop)
}
 */

/**
* 連想配列
*/
/* const words = {
  'apple': 'りんご',
  'orange': 'みかん',
  'grape': 'ぶどう'
}

const q = prompt('日本語で答えます')
if (words[q] !== undefined) {
  r(`${q}:その単語の日本語は${words[q]}です`)
} else {
  r(`知らん！`)
} */