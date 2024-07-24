
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);     


let kaisu = 0;



let s = document.querySelector('button#print');
s.addEventListener('click', hantei);

function hantei() {
  kaisu ++;
 
  let yoso= Math.floor(document.querySelector('input[name="seisu"]').value);
  let x = document.querySelector('p#result');
  let y = document.querySelector('span#answer');
  y.textContent=yoso;
  let z=document.querySelector('span#kaisu');
  z.textContent=kaisu;

  
 console.log(kaisu+'回目の予想'+yoso);
 

  
    if(kaisu > 3) {
    x.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    } else if(kotae === yoso) {
      x.textContent = '正解です．おめでとう!';
    kaisu = 4;
    } else {
      if(kaisu === 3) {
          x.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
      } else if(kotae > yoso) {
          x.textContent = 'まちがい．答えはもっと大きいですよ';
      } else {
          x.textContent = 'まちがい．答えはもっと小さいですよ';
      }
  }  
  
}