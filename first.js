
const student ={                //-object
    fullname:"rahul kumar",
    age :20,
    cgpa:8.2,
    ispass:true,
}               
console.log(student.age);//first way to access variable of an object
console.log(student["fullname"]);//second way
let a=25;
a=40;
console.log(a);
student.age=student["age"] + 1;
console.log(student.age);

const product ={
    name :"ball pen",
    rating :4,
    offer :5,
    price : 270,
};
console.log(product);
const profile = {
    username:"shreevatsa",
    isfollow : false,
    followers :123,
    following :456,
}
console.log(profile)/*this is a multiple  line comment*/ 
console.log(typeof profile["username"]); //this is single line comment




