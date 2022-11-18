arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}] ;
function full_name(array) {
    new_array = array.map(function(el){
        return el.first +" "+ el.last
    })
    return new_array
}
console.log(full_name(arr))