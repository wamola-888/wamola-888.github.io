/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


if(myHeading.textContent=== 'Hello world!'){
    alert('そうです、こんにちは！')
}else{
    alert('何も言わないようだ...')
}

document.querySelector('html').onclick = function() {
    alert('痛っ! つつくのはやめて!');
} */

let myImage = document.querySelector('div.main-img img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/01-not-found-book.png') {
      myImage.setAttribute ('src','images/02-gold-cup-for-the-future.png');
    } else {
      myImage.setAttribute ('src','images/01-not-found-book.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/* function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'WAMOLA はすばらしいよ、' + myName;
  }
//これは名前を入れないと空白、キャンセルするとnullになる */

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);//localStrageに保存しておく用
        myHeading.innerHTML = 'WAMOLA is cool, ' + myName;
    }
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'WAMOLA はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  