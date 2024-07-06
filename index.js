const schools = [
    { 
        schoolName:" TOP ride",
        location: "Isinya",
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
 
function schoolNamePrinter (collection){
    for (const schools of collection){
        if (schools.language === "kalengin"){
            console.log(schools.location);
        }
        
    }
}
schoolNamePrinter(schools);