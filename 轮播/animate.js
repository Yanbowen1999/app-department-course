var novList = document.getElementsByClassName('bannerNov')[0].children;
var box = document.getElementsByClassName('wrap')[0];
var links = box.children;
var i = 0;
for (var j = 0; j < novList.length; j++) {
    novList[j].index = j; //给每一个novlist加一个属性index
    novList[j].onclick = function() { //给novList

        links[i % 8].style.display = "none";
        novList[i % 8].style.background = "#fff";
        this.style.background = "blue";
        links[this.index].style.display = "block";
        i = this.index;
    }
}

function imgchange() {
    links[i % 8].style.display = "none";
    novList[i % 8].style.background = "#fff";
    i++;
    links[i % 8].style.display = "block";
    novList[i % 8].style.background = "blue";
}
var timer = setInterval(imgchange, 2000);
box.onmouseover = function() {
    clearInterval(timer);
}
box.onmouseout = function() {
    timer = setInterval(imgchange, 2000);
}

var prev = document.getElementById("prev");
var next = document.getElementById("next");
prev.onclick = function() {
    links[i % 8].style.display = "none";
    novList[i % 8].style.background = "#fff";
    i--;
    if (i < 0) {
        i = 7;
    }
    links[i % 8].style.display = "block";
    novList[i % 8].style.background = "blue";
}
next.onclick = function() {
    imgchange();
}