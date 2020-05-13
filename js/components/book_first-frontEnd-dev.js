/**
 * デフォルト引数
 */
function joinChannel(name = "匿名") {
  r(`${name}さんが入室しました <br>`);
}
// joinChannel();
// joinChannel("太郎");

// r(`<br>`); // break

/**
 * アロー関数
 * return省略
 */
// const add = (a, b) => {
//   return r(a + b);
// };
const add = (a, b) => r(a + b);
// add(12, 22);

// r(`<br>`); // break

/**
 * map 無名関数を渡す
 */
const events = [2, 3, 4];
const odds = events.map((_v) => _v * 12 + 1);
// r(odds);

r(`<br>`); // break

/**
 * this
 * 従来のthis
 *
 */
const name = "おれ"; // スコープ外
const person = {
  name: "太郎",
  lazy_hello: function () {
    setTimeout(
      function () {
        // this = 無名関数自身
        r(`hello! ${this.name}さん<br>`);
        // }, 1000);
      }.bind(this), // bind()でthisを束縛する
      1000
    );
  }
};
// person.lazy_hello();

/**
 * thisのArrowありで解決
 * setTimeout(()=> (命令) , time)
 *
 */
const personArrow = {
  name: "矢印 矢作次郎",
  lazy_arrow: function () {
    setTimeout(() => r(`よお！${this.name}ちゃん`), 2000); // 定義した場所のthisを参照 = 関数内のキー
  }
};
// personArrow.lazy_arrow();

/**
 * Class
 * class クラス名{ // オブジェクト
     コンストラクタ(引数){　// new クラス名() で呼び出せる 特別なメソッド
       this.引数 = 引数
     }
     メソッド名(){
      命令
    }
  }
  const 変数　= new クラス名(引数)
  変数.メソッド() // 実行
 *
 */
class personClass {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
  printMethod() {
    r(`id:${this.id} name:${this.name}`);
  }
}

const _printMethod = new personClass(226, "猫柳沢 モン十郎三郎");
_printMethod.printMethod();

r(`<br>`); // break

/*
 * クラスの継承
 */
class exPersonClass extends personClass {
  constructor(id, name, channel, result) {
    super(id, name);
    this.channel = channel;
    this.result = result;
  }
  sendMessage(message) {
    r(
      `${this.id}:${this.name}は${this.channel}に${message}を${this.result}ました`
    );
  }
}

const getMessage = new exPersonClass(
  666,
  "犬柘榴 見衛門",
  "general",
  "ぶっこみ"
);
if (getMessage.channel === "general") {
  getMessage.channel = getMessage.channel + "チャンネル";
}
getMessage.sendMessage("クレーム");

r(`<br>`); // break

const getMessage2 = new exPersonClass(
  226,
  "猫柳沢",
  "ダイレクトメッセージ",
  "炸裂させ"
);
getMessage2.sendMessage("怒り");
