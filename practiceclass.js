let data ="secret imformation";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("website data",data);
    }
}
let student1=new user("shradha","abcd.com");
let student2=new user("aman","cfg.cpm");

class admin extends user{
    editdata(){
        data="some new value";
    }
}
let admin1 =new admin("admin","admin@clg.com");