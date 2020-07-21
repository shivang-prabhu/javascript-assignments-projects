class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }


    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
   
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',24,'k@gmai.com')
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];




admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');



 user1.login()
 mod.addCoins(user2);
 mod.addCoins(user1);

 user1.logout()

 user1.login().getDetails().logout();

 console.log(users);