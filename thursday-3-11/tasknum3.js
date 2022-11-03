// grade = 0 ;
grade =Number(prompt("inter the grade"));
if (grade < 50) {
    document.write("fail")
} else if ((grade >= 50 ) && (grade <= 59 )) {
    document.write("the grade is D")
} else if ((grade > 59 ) && (grade <= 69 )) {
    document.write("the grade is C")
} else if ((grade > 69 ) && (grade <= 79 )) {
    document.write("the grade is B")
} else if ((grade > 79 ) && (grade <= 89 )) {
    document.write("the grade is A")
} else if ((grade > 89 ) && (grade <= 100 )) {
    document.write("the grade is A+")
} 