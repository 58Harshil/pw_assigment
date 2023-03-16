const marks = [10,20,30,40,50]
let h_marks = marks[0]
for(let i = 1; i<marks.length; i++){
    if (marks[i]>h_marks){
        h_marks = marks[i]
    }
}
console.log('The height marks is = ' + h_marks);
