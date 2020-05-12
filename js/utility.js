/* =============================================
=            開発用変数・関数
 * =
=============================================
 */
const el = document.querySelector('.content')
const r = (_x) => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`
}
/*=====  End 開発用メソッド  ======*/