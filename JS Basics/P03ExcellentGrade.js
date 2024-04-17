// Declare function
function printGradeType (grade){
    // grade >= 5.50 -> 'Excellent'
    // grade < 5.50 -> 'Not excelent'
    // Option 1
    // С if/else:
    // *if (grade >= 5.50){
       // console.log(Excelent')
//} else {
    // console.log('Not excelent')
    // }*/
    
    // Option 2
    // С тернарен оператор:
    console.log(grade >= 5.50 ? 'Excellent' : 'Not excellent');
}

// Invocation function
printGradeType(5.50);
printGradeType(4.35);