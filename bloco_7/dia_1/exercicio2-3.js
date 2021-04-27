if (typeof (document) !== "undefined") {
  let buttonJs = document.getElementById('button');
  let showResult = document.getElementById('counter');
  let clickCount = 0;
  
  buttonJs.addEventListener('click', () => {
    clickCount += 1
    showResult.innerText = clickCount;
  });
}s