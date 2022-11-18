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
        if (el.age >= 16){
            console.log(el.name + "can go to The Matrix")
        } else {
            console.log(el.name + "is under age!!")
        }
     })