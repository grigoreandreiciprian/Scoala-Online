
import Enrolment from "../modele/enrolment.js";


export default class EnrolmentController{

    constructor(){

        this.lista=[]
        this.load();

    }

    load=()=>{

         let data=JSON.parse(localStorage.getItem("enrolments"))

         if(data){
             data.forEach(e =>{
                 this.lista.push(new Enrolment(e.id,e.studentId,e.courseId,e.createdAt))
             })
         }else{
             console.log("Nu exista elemente in local storage")
         }
    }

    
    afisare=()=>{

        for(let i=0;i<=this.lista.length;i++){
           console.log(this.lista[i])
        }
       }
    
       

       save=()=>{

          localStorage.removeItem("enrolments")

          localStorage.setItem("enrolments", JSON.stringify(this.lista))
       }

       add=(enrolment)=>{

        this.lista.push(enrolment)

        this.save();

       }


       delete=(id)=>{

        this.lista=this.lista.filter(e=>e.studentId!=id)

        this.save();

       }


       indexOf=(enrolment)=>{

        for(let i=0;i<this.lista.length;i++){

            if(enrolment.studentId==this.lista[i].studentId){
                return i
            }else{
                return -1
            }

        }
       }


       update=(enrolment)=>{
           let poz=this.indexOf(enrolment);

           if(poz != -1){
               
           }
       }


}