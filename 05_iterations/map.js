// ********* maps **************

const map = new Map()

map.set("in","india")
map.set("usa","united states of amarica")
map.set("fr", "farance")

// console.log(map);

for (const [key,value] of map) { /// forof loop is posible 
    console.log(key,":-",value);
    
}

for (const key in map) {   //// forin is not possible
    console.log(key); 
    
}