
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img.jpg') {
      myImage.setAttribute('src', 'images/img1.jpg');
    } else {
      myImage.setAttribute('src', 'images/img.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*该函数首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框。
  但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。
  接下来将调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。
  这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 
  变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字
  */
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  /*
这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），调用
getItem() 获取保存的名字，像上文的 setUserName() 那样设置 textContent。
*/
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
/*为按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数。
这样用户就可以通过按这个按钮来自由设置新名字了 */
  myButton.onclick = function() {
    setUserName();
 }