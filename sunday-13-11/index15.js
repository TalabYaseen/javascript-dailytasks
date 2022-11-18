// * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
// * Test Cases 2:  vowelCount('Tim') // {i:1};
// * Test Cases 3:  vowelCount('Matt') // {a:1})
// * Test Cases 4:  vowelCount('hmmm') // {};
// * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// *
 namee = 'aEliae'
/* function vowelCount(str) {
    str = str.split('')
    aa = 0
    ee = 0
    ii = 0
    oo = 0
    uu = 0
    str.forEach(function(char){
        if (char == "a" || char =="A"){
            aa++
        }
        aa  
    }
    
    )
    ee = 0
    str.forEach(function(char){
        if (char == "e" || char =="E"){
            ee++
        }
        ee
    },ee)
    ii = 0
    str.forEach(function(char){
        if (char == "i" || char =="I"){
            ii++
        }
        ii  
    },ii)
    oo = 0
    str.forEach(function(char){
        if (char == "o" || char =="O"){
            oo++
        }
        oo  
    },oo)
    uu = 0
    str.forEach(function(char){
        if (char == "u" || char =="U"){
            uu++
        }
        uu 
    },uu)
    return ({
        a:aa,
        e:ee,
        i:ii,
        o:oo,
        u:uu
    })

}
console.log(vowelCount(namee)) */
function vowelCount(str) {
    str = str.split('')
    aa = 0
    ee = 0
    ii = 0
    oo = 0
    uu = 0
    str.forEach(function(char){
        if (char == "a" || char =="A"){
            aa++
        }
        if (char == "e" || char =="E"){
            ee++
        }
        if (char == "i" || char =="I"){
            ii++
        }
        if (char == "o" || char =="O"){
            oo++
        }
        if (char == "u" || char =="U"){
            uu++
        }
        
    })
    return ({
        a:aa,
        e:ee,
        i:ii,
        o:oo,
        u:uu
    })}
    console.log(vowelCount(namee)) 