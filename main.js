const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */

for (var i = 1; i <= 5; ++i) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "IMG") {
    // console.log(e.target.src);
    img_src = e.target.src;
    displayedImage.setAttribute("src", img_src);
  }
});
/* 编写 变暗/变量 按钮功能 */

btn.addEventListener("click", function (e) {
  if (e.target.textContent == 'Lighten') {
    e.target.textContent = 'Darken';
    displayedImage.setAttribute("class", "light");
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    e.target.textContent = 'Lighten';
    displayedImage.setAttribute("class", "dark");
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
});
