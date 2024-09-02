const student ={
    fullname :"shreevatsa",
    marks : 80,
    printmarks:function(){
        console.log("marks=",this.marks);//this = student (present object)
    }
};
const newstudent ={
    n:"shree",
    m: 70,
}
newstudent.__proto__=student; //its like extends for object 
class students{
constructor(){//constructor is called first when the new object is created
console.log("created new object");
}
marks(marks){
    console.log("marks=",marks);
    this.marks=marks;
}
}
let shree = new students(80);

