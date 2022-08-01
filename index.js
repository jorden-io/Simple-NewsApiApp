(async() => {
const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=aac66c5c20ce4423ad0cf0621c71a81a'
);
const parseRes = await res.json();
console.log(parseRes);
let num = 0;

let data = document.getElementById('data');
let button = document.getElementById('button');
let backBoutton = document.getElementById('back-button')
const title = document.getElementById('title');
const newsUrl = document.getElementById("url")
const dataContainer = document.getElementById('data-container');
const sourceName = document.getElementById('source-name')
let pubDate = document.getElementById('pub-date');
let image = document.getElementById('img');

backBoutton.addEventListener('click', () => {
    dataContainer.style.display = 'block';
num--
dataContainer.style.animation = 'next 0.2s linear'
sourceName.innerText = 'by: ' + parseRes.articles[num].source.name 
title.innerText = parseRes.articles[num].title
data.innerText = parseRes.articles[num].content
newsUrl.innerHTML = parseRes.articles[num].url
image.src = parseRes.articles[num].urlToImage
// image.src = parseRes.articles[num].urlToImage
setTimeout(() => {
dataContainer.style.animation = '';
}, 210)
});

button.addEventListener('click', () => {
    dataContainer.style.display = 'block';
num++
dataContainer.style.animation = 'next 0.2s linear'
sourceName.innerText = 'by: ' + parseRes.articles[num].source.name 
title.innerText = parseRes.articles[num].title
data.innerText = parseRes.articles[num].content
newsUrl.innerHTML = parseRes.articles[num].url
pubDate.innerText = 'published: ' + parseRes.articles[num].publishedAt
image.src = parseRes.articles[num].urlToImage

setTimeout(() => {
dataContainer.style.animation = '';
}, 210)
});
//data.innerText = parseRes.articles[num].title
})();
