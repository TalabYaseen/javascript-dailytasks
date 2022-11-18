// addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
obj = {title: 'instructor'}
function addKeyAndValue(array,obje) {
    result = []
    array.forEach(function(el,index){
        result[index] = {"name":el["name"],"title":obje["title"]}
}),obje
return result}
console.log(addKeyAndValue(arr,obj)) 