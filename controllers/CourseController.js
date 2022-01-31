
import Course from "../modele/course.js";


export default class CourseController{

    constructor(){

        this.lista=[];
        this.load();
    }

    load=()=>{

      let data=JSON.parse(localStorage.getItem("cursuri"))

      if(data){
          data.forEach(e =>{
              this.lista.push(new Course(e.id,e.name,e.department))
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

          localStorage.removeItem("cursuri")
          localStorage.setItem("cursuri", JSON.stringify(this.lista))

       }

       add=(curs)=>{

        this.lista.push(curs)
        
        this.save();
       }

       delete=(id)=>{
          this.lista= this.lista.filter(e=>e.id != id)
           this.save();
       }


       indexOf=(course)=>{

           for(let i=0;i<this.lista.length;i++){

            if(course.id==this.lista[i].id){
                return i
            }else{
                return -1
            }
           }
       }

       update=(course)=>{
           let poz=this.indexOf(course)

           if(poz!=-1){

            if(course.name != ""){

                this.lista[poz].name=course.name

            }

            if(course.department != ""){

                this.lista[poz].department=course.department
            }
           }

           this.save();
       }
      


}