
/**
* 連想配列
*/
const words = {
  'apple': 'りんご',
  'orange': 'みかん',
  'grape': 'ぶどう'
}

const q = prompt('日本語で答えます')
if (words[q] !== undefined) {
  r(`${q}:その単語の日本語は${words[q]}です`)
} else {
  r(`知らん！`)
}