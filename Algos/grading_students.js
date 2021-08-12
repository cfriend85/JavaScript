const gradingStudents = (grades) => {
    for(let i = 0; i < grades.length; i++){
        if (grades[i] < 38){
            grades[i] = grades[i]
        }
        else if(Math.ceil(grades[i]/5)*5 - grades[i] < 3){
            grades[i] = Math.ceil(grades[i]/5)*5
        }
    }
    return grades
}