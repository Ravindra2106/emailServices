import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
Http
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // emailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private http:HttpClient, 
    // private https:Http
    // ,private group:FormGroup
    ) {

  }
  ngOnInit() {
  }
  // email() {
    emailForm: FormGroup = new FormGroup({
      email: 
      new FormControl('', Validators.required),
      // ['', [Validators.required, Validators.minLength(10)]],
      
      comment: 
      new FormControl('', Validators.required)
      // ['', Validators.required]
    })
  // }
  onEmail()
  {
    // console.log("email>>",this.email);
    this.http.post("http://localhost:8000/email", this.newEmail()).subscribe((res)=>{
      console.log(res);
    });
    
  }
  newEmail()
  {
    const eml={
    "email1":this.emailForm.value.email,
    "comment1":this.emailForm.value.comment
    };
    console.log("newwwww>>>>",eml);
    return eml; 
  }

}
