
import Student from "../modele/student.js";


export default class StudentController{

     constructor(){

        this.lista=[];
        this.load();
     }

     load=()=>{
      
       let data= JSON.parse(localStorage.getItem("studenti"));

       if(data){
          
         data.forEach(e =>{

            this.lista.push(new Student(e.id,e.firstName,e.lastName,e.email,e.age));
         });
       }else{
          console.log("Nu exista elemente in local storage")
       }

     }


     afisare=()=>{

   
      this.lista.forEach(e=>console.log(e));
     }

     //CRUD create read update delete



     add=(student)=>{

      this.lista.push(student);

      this.save();

     }
//delete id student

      delete=(id)=>{
         this.lista=this.lista.filter(e=>e.id!=id);
         this.save();

      }  
         
      save=()=>{
         localStorage.removeItem("studenti");

         localStorage.setItem("studenti",JSON.stringify(this.lista));
      }



      update=(student)=>{
         let poz=this.indexOf(student);
         if(poz!=-1){

            if(student.firstName!=""){
                  
               this.lista[poz].firstName=student.firstName;
            }

               if(student.lastName!=""){

                  this.lista[poz].lastName=student.lastName;
               }


               if(student.email!=""){

                  this.lista[poz].email=student.email
               }

               if(student.age!=""){

                  this.lista[poz].age=student.age;
               }

          
            this.save();
         }


      }
      indexOf=(student)=>{

          
          for(let i=0;i<this.lista.length;i++){
             if(student.id==this.lista[i].id){
                return i;
             }
          }

          return -1;
      }




}