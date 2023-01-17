import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taskno20';

  date= new Date();
  showMassege = false;
  candidateList:any = [
   {
      name:"Ashay ",
      age:18,
      phone:9766231088,
      gender:"Male",
      status:"Available"
    },
    {
      name:"Shivam",
      age:19,
      phone:7887785659,
      gender:"Male",
      status:"Available"
    },
    {
      name:"Mohini",
      age:20,
      phone:6589752,
      gender:"Female",
      status:"Available"
    },
    {
      name:"Kajal",
      age:21,
      phone:3654859,
      gender:"Female",
      status:"Not-Available"
    },
    {
      name:"Ritu",
      age:22,
      phone:578995,
      gender:"Female",
      status:"Not-Available"
    },
    
    ];
  
  
  v1Candidate:any = [];
  v2Candidate:any = [];
  BCandidate:any = [];
  
  candidateName = "";
  candidateAge = "";
  candidatePhone = "";
  candidateGender = "";
  selectedIndex = '';
  candidatestatus = "";

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  
  v1Done(i:any){
    console.log("candidateList",this.candidateList)
    this.v1Candidate.push(this.candidateList[i]);
    this.candidateList.splice(i,1);
  }
    v2Done(i:any){
    this.v2Candidate.push(this.v1Candidate[i]);
    this.v1Candidate.splice(i,1);
  }
    BDone(i:any){
    this.BCandidate.push(this.v2Candidate[i]);
    this.v2Candidate.splice(i,1);
  }
  cDelete(i:any){
    this.candidateList.splice(i,1);
  }
  cBack(i:any){
    this.candidateList.push(this.v1Candidate[i]);
    this.v1Candidate.splice(i,1);
  }
  v1Back(i:any){
    this.v1Candidate.push(this.v2Candidate[i]);
    this.v2Candidate.splice(i,1);
  }
    v2Back(i:any){
    this.v2Candidate.push(this.BCandidate[i]);
    this.BCandidate.splice(i,1);
  }
  
  
  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)

    if(index !='add'){
      this.candidateName = this.candidateList[index].name;
      this.candidateAge = this.candidateList[index].age;
      this.candidatePhone = this.candidateList[index].phone;
      this.candidateGender =this.candidateList[index].gender;
      this.candidatestatus = this.candidateList[index].status;
      this.selectedIndex = index;
    }
   this.modalRef = this.modalService.show(template,);
  }
  
  submit(){
    let user={
      name:this.candidateName,
      age:this.candidateAge,
      phone:this.candidatePhone,
      Gender:this.candidateGender,
      status:this.candidatestatus
    }
    console.log('this.candidateList',this.candidateList)
  this.candidateList.push(user);
  
  this.showMassege = true;

  this.close()
  }
  
  update(){  
    this.candidateList[this.selectedIndex].name=this.candidateName;
    this.candidateList[this.selectedIndex].age=this.candidateAge;
    this.candidateList[this.selectedIndex].phone=this.candidatePhone;
    this.candidateList[this.selectedIndex].gender=this.candidateGender;
    this.candidateList[this.selectedIndex].status=this.candidatestatus;
  

    this.close()
    
  }

  close(){
    this.candidateName="";
    this.candidateAge="";
    this.candidatePhone="";
    this.candidateGender="";
    this.candidatestatus="";
    this.modalRef?.hide();
  }
}

