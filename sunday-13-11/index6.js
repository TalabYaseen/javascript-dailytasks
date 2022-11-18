arr = [
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]
     result = arr.map(function(el){
        return ("<h1>"+el.name+"</h1><h2>"+el.age+"</h2>")
     })
     console.log(result)