const schools = [
    { 
        schoolName:" TOP ride",
        location: "Kajiado",
        language: "maasai"

    },
    {
        schoolName:"kianguenyi",
        location:"kirinyaga",
        language:"kikuyu"
    },
    {
        schoolName:"blue sky academy",
        location:"kajiado",
        language:"maasai again"
    },
    {
        schoolName:"segero adventist",
        location:"kapseret",
        language:"kalenjin"
    },
];

// array alteration
// alteration over the collection and print out the schools name
 
function schoolNamePrinter(collection,locations){
    for (const schools of collection){
        if (schools.location === locations){
             return schools.schoolName;
        };
        
    }
}
schoolNamePrinter(schools,"kajiado")


//  basic syntax for for... in loop 
//  for ( let varibale_name in object_name){
    //  this is where the loop code is written.
    
//  }

//  for example 
let myObject = {x:2,y:3,z:4};
for (let number in myObject){
      console.log (number,myObject[number])
}
//  the for ..of loop in javscript helps iterate through objects 
// including array,map ,set, arguments objects and so on.

//  for ... in loop 
//  it is used to iterate the iterable objects for example arrays, objects,set and map.
// it directly iterate the value of the given iterable object and has more concise syntax that for loop.
// the basic syntax for for ... in loop is 
 for ( let variable_name in obect_name){
    // loop code.
    
 }
 