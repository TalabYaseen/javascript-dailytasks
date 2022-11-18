arr = [5,1,2,3,10]
function onlyEvenValues(array){
    result = []
    array.forEach(function(el){
        if (el%2 == 0){
            result.push(el)
        }
    })
return result
}
console.log(onlyEvenValues(arr))