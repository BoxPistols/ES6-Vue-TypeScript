document.title = '俺の' + document.title
/*
  let sec = prompt("N分は何秒？")
  document.write(60 * sec)
*/

/*=============================================
=            開発用メソッド            =
=============================================*/
let el = document.querySelector('.content')
let r = (_x) => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`
}
/*=====  End of Section 開発用メソッド  ======*/

// 定数today
const today = new Date()
const getMonth = today.getMonth() + 1
const getDate = today.getDate()
const getHours = today.getHours()
const getMinutes = today.getMinutes()
// const getEventDay = new Date(2020, 5, 12)

// el.insertAdjacentHTML('beforeend', `${getMonth} / ${getDate} (${getDay})`)
r(`${getMonth} / ${getDate} _ (${getHours}:${getMinutes})`)

r('<p></p>')

let numQuest = prompt('1 - 10で')
if (numQuest >= 1 && numQuest <= 10) {
  r('OK!')
} else {
  r('NO!')
}