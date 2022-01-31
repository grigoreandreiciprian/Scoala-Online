
export default class Student{
    constructor(id,firstName,lastName,email,age){

        this.id=id
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
    }


    afisare=()=>{

        let text=`
         "Numele este ${this.firstName}
         "Prenumele este ${this.last_name}
         "Adresa de email este ${this.email}
         "Varsta este de ${this.age}
        `
        console.log(text)
    }
}