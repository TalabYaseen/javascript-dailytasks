arr=[1,2,3];
new_arr =[]
function doubleValues(array) {
     array.forEach(function(num){
        new_arr.push(num*2)
        console.log(new_arr)
    })
    return new_arr
}
console.log(doubleValues(arr)) 