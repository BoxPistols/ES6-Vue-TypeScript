/**
 * 検索文字の場所
 * 入力の文字が見つかれば、何文字目か答えるアプリ
*/

// Test
// const bookIndex = "吾輩は猫だよ"
// r(bookIndex)

// break
// r('<p></p>')

const book = bookIndex.indexOf('猫')
r(book)

let keyword = prompt('検索文字')
let bookPos = bookIndex.indexOf(keyword)

if (bookPos > 0){
  r(`${keyword}は${bookPos + 1}文字目です`)
} else {
  r('ない！')
}