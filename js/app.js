document.title = '俺の' + document.title
/*
  let sec = prompt("N分は何秒？")
  document.write(60 * sec)
*/

/*=============================================
=            開発用変数・関数          =
=============================================*/
const el = document.querySelector('.content')
const r = (_x) => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`
}
/*=====  End of Section 開発用メソッド  ======*/


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
// const getEventDay = new Date(2020, 5, 12)

// 宣言の中に配列を入れる
const weekJP = ["日", "月", "火", "水", "木", "金", "土"]

// el.insertAdjacentHTML('beforeend', `${getMonth} / ${getDate} (${getDay})`)
r(`${getMonth}/${getDate} (${weekJP[getDay]}) _ ${getHours}:${getMinutes}`)

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

r('<p></p>')

/**
 *  while文
 */
let dayLoop = 1
while (dayLoop <= 12) {
  console.log(dayLoop)
  // dayLoop += 1
  r('<span>' + dayLoop + '</span>.')
  dayLoop ++
}

r('<p></p>')

/**
 * for文
 */
for (let forLoop = 1; forLoop <= 12; forLoop++) {
  r(forLoop)
}
