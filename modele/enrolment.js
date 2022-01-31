
export default class Enrolment{
    constructor(id,studentId,courseId,createdAt){
        this.id=id;
        this.studentId=studentId;
        this.courseId=courseId;
        this.createdAt=createdAt;
    }


    afisare=()=>{

        let text=`
        Id-ul studentului este ${this.studentId}
        Id-ul cursului este ${this.courseId}
        A fost creat la data de ${this.createdAt}
        `

        console.log(text)
    }
}