

export default class Course{
    constructor(id,name , department){

        this.id=id;
        this.name=name;
        this.department=department;
    }


    afisare=()=>{
        let text=`
        
        Numele cursului este ${this.name}
        Departamentul este ${this.department}
        
        `
        console.log(text)
    }

}