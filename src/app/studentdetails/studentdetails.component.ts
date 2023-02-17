import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  studentarray:any=[]
  updatestudents:any=false
  id:any
  studentnamee:any

  constructor(private http:HttpClient,private route:Router,private fb:FormBuilder,private service:ServiceService){
    this.http.get('http://localhost:3000/studentdetails',{})
    .subscribe((result:any)=>{
      this.studentarray=result.result
    })
  }

  updateform = this.fb.group({
    studentname:[],
    newstudentname:[],
    newage:[],
    newcoursename:[],
    newcoursecompletionyear:[]
  })

  addstudent(){
    this.route.navigateByUrl("")
  }

  deletestudent(_id:any){
    console.log(_id);
    this.http.delete(`http://localhost:3000/deletestudent/${_id}`,)
    .subscribe((result:any)=>{
      alert(result.message)
      window.location.reload()
    }) 
  }

  updatestudent(_id:any,studentname:any){
    console.log(_id);
    console.log(studentname);
  
    
    this.updatestudents=true
  }

  add(){
    var studentname=this.updateform.value.studentname
    var newstudentname=this.updateform.value.newstudentname
    var newage=this.updateform.value.newage
    var newcoursename=this.updateform.value.newcoursename
    var newcoursecompletionyear=this.updateform.value.newcoursecompletionyear
    if(this.updateform.valid){
      
      this.service.update(studentname,newstudentname,newage,newcoursename,newcoursecompletionyear)
      .subscribe((result:any)=>{
        alert(result.message)
        window.location.reload()
      },(result)=>{
        console.log(result.error.message)    
        alert(result.error.message);}) 


     
      



    }
    else{
      alert("invalid format")
    }


    



  }





}
