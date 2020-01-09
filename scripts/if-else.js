let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img.jpg') {
      myImage.setAttribute('src', 'images/img1.jpg');
    } else {
      myImage.setAttribute('src', 'images/img.jpg');
    }
}