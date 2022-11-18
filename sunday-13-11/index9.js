array = [{username: 'Elie'}, {username: 'Tim'}, {username: 'Matt'}, {username: 'Colt'}]
function extractKey(arr,key) {
    arr1 = arr.map(function(el){
        return el[key]
    },key);
    return arr1
}
console.log(extractKey(array,"username"))