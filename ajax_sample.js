let number = 0;
let data = []; // ajax.json から取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = JSON.parse(request.responseText);
      changeVideo(); // データを取得したらビデオを変更する処理を呼び出す
    }
  }
  request.open("GET", "ajax.json");
  request.send();
}

function changeVideo() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? number = 0 : number++;
}

button.addEventListener('click', changeVideo);

// 初回のみデータを取得
window.onload = getData;