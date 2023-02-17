import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent {

  registerform=this.fb.group({
    studentname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    age:["",[Validators.required,Validators.pattern('[0-9]*')]],
    coursename:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    coursecompletionyear:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

 

  constructor(private fb:FormBuilder,private service:ServiceService,private route:Router){}

 



  register(){
    var studentname = this.registerform.value.studentname
    var age=this.registerform.value.age
    var coursename = this.registerform.value.coursename
    var coursecompletionyear=this.registerform.value.coursecompletionyear

    if(this.registerform.valid){
      this.service.register(studentname,age,coursename,coursecompletionyear)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.route.navigateByUrl("studentdetails")
        }

      },(result)=>{
        console.log(result.error.message)    
        alert(result.error.message);})
    }
    else{
      alert("Invalid format")
    }

  }

}
