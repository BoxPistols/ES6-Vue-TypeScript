
/**
* 整数で1-10の数字を入れるアプリ
* 回答の範囲を条件づけ
*
* 繰り返し文の基本
*
*/

let numQuest = prompt('1 - 10で')
if (numQuest >= 1 && numQuest <= 10) {
  r('OK!')
} else {
  r('NO!')
}

// break r('<p></p>')

/**
 * while文
 * 複雑な計算の用途
 */
let dayLoop = 1
while (dayLoop <= 12) {
  console.log(dayLoop)
  // dayLoop += 1
  r('<span>' + dayLoop + '</span>.')
  dayLoop ++
}

// break
r('<p></p>')

/**
 * for文
 * 簡単な計算の用途
 */
for (let forLoop = 1; forLoop <= 12; forLoop++) {
  r(forLoop)
}