arr = ['colt','matt', 'tim', 'udemy'];
function showFirstAndLast(array){
    result = []
    array.forEach(function(namee,index){
        result[index] = (namee[0] + namee[namee.length -1])
    }
)
return result}
console.log (showFirstAndLast(arr))