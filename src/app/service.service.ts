import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  register(studentname:any,age:any,coursename:any,coursecompletionyear:any){
    const data={
      "studentname":studentname,
      "age":age,
      "coursename":coursename,
      "coursecompletionyear":coursecompletionyear
    }
      return this.http.post('http://localhost:3000/register',data)

  }

  update(studentname:any,newstudentname:any,newage:any,newcoursename:any,newcoursecompletionyear:any){
    console.log("updating");
    
    const data={
      "studentname":studentname,
      "newstudentname":newstudentname,
      "newage":newage,
      "newcoursename":newcoursename,
      "newcoursecompletionyear":newcoursecompletionyear
    }
    return this.http.post('http://localhost:3000/updatestudent',data)


  }



}
