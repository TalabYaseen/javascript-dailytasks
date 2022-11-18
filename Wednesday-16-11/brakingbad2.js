let parent =document.getElementById('parent')
async function fetchbreakingbadJSON() {
const response = await fetch('https://www.breakingbadapi.com/api/characters');
const Characters = await response.json();
html =`<table border = "1px double"><tr><th>name</th><th>nickname</th><th>image</th></tr>`
Characters.forEach(el => {
    html+= `<tr><td>${el.name}</td><td>${el.nickname}</td><td><img width="150px" src =${el.img}></td></tr>`
})
html+= `</table>`;
document.getElementById('parent').innerHTML = html
}
fetchbreakingbadJSON()
