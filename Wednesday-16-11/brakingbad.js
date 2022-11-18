let parent =document.getElementById('parent')
async function fetchbreakingbadJSON() {
const response = await fetch('https://www.breakingbadapi.com/api/characters');
const Characters = await response.json();
// console.log(response)
// console.log(Characters)
// console.log(Characters.length)
return Characters;
}
// fetchbreakingbadJSON()
console.log(fetchbreakingbadJSON())
fetchbreakingbadJSON().then(Characters => {
Characters; // fetched Characters
console.log(Characters)
Characters.map(e=>{
    let main_box = document.createElement('div')
    let box1 = document.createElement('div')
    let box2 = document.createElement('div')
    // title
    let h1 = document.createElement('h1')
    h1.textContent = e.char_id + "-" + e.name
    box1.appendChild(h1)
    //bairthday
    let h2 = document.createElement('h2')
    h2.textContent = "birthday : " + e.birthday 
    box2.appendChild(h2)
    //occupation
    e.occupation.forEach(element => {
        let h4 = document.createElement('span')
        h4.textContent = element
        box2.appendChild(h4)
    });
    // img
    let img = document.createElement('img')
    img.classList.add('img')
    img.src = e.img
    box1.appendChild(img)
    // in status
    let h3 = document.createElement('h3')
    h3.textContent = "status : " + e.status
    box2.appendChild(h3)
    // nickname
    let h4 = document.createElement('h3')
    h4.textContent = "nickname : " + e.nickname
    box2.appendChild(h4)
    // appearance
    let h5 = document.createElement('h3')
    h5.textContent = "appearance : season" + `(${e.appearance.toString()})`
    box2.appendChild(h5)
    // portrayed
    let h6 = document.createElement('h3')
    h6.textContent = "portrayed :" + e.portrayed
    box2.appendChild(h6)
    // category
    let h7 = document.createElement('h3')
    h7.textContent = "category :" + e.category
    box2.appendChild(h7)
    //better_call_saul_appearance
    let h8 = document.createElement('h3')
    h8.textContent = "better_call_saul_appearance : season" + `(${e.better_call_saul_appearance.toString()})`
    box2.appendChild(h8)
    // main_box style
    main_box.style.display = "flex"
    main_box.style.flexDirection = "row"
    main_box.style.justifyContent = "space-between"
    // box1 style
    main_box.style.width = "40%"
    // main_box.style.flexDirection = "row"
    // box2 style
    main_box.style.width = "40%"
    // main_box.style.flexDirection = "row"
    // lets append elaments togather
    main_box.appendChild(box1)
    main_box.appendChild(box2)
    parent.appendChild(main_box)
})

});
