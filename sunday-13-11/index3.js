
arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// result = arr.map(function(el){
//     el2 = el.toLowerCase()
//     el2[0] = el[0].toUpperCase()
//     return el2
// })
capitalizeNames1 = arr.map(x => x.split(""))
capitalizeNames2 = capitalizeNames1.map(function(name){
return name.map(function(char,index) {
    if (index == 0) {
        return char.toUpperCase()
    }else {
        return char.toLowerCase()
    }
}).join('')
// ما تنفذت الجوين
})
console.log(capitalizeNames2)
// console.log(result)

