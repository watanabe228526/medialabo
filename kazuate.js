// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let b = document.querySelector('#print');
b.addEventListener('click', hantei);



// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let s = document.querySelector('span#kaisu');
  s.textContent=kaisu;
  
  let yoso = kazuate;
  let a=document.querySelector('span#a');
  a.textContent=yoso;
  kaisu++;
  let resultmessage=kaisu+'回目の予想'
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
    if(kaisu>=4){
        console.log("答えは"+kotae+"でした．すでにゲームは終わっています");
        
    }
    else if(yoso===kotae){
        console.log("正解です．おめでとう!");
    }
    if(kaisu===3){
        console.log("まちがい．残念でした答えは"+kotae+"です．");
        
    }
    if(kaisu<=2&&yoso<kotae){
        console.log("まちがい．答えはもっと大きいですよ");
    }
    if(kaisu<=2&&yoso>kotae){
        console.log("まちがい．答えはもっと小さいですよ");
    }
    
    
  
}