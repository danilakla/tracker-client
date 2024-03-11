import { makeAutoObservable } from "mobx";

class TeacherStore{


    subjectCode = "";
    amountStudent =0;
    currentAmount =0;
    constructor(){
            makeAutoObservable(this)
    }

    get getsubjectCode(){
        return this.subjectCode;
    }

    get getCurrentAmount(){
        return this.currentAmount;
    }

    
    get getamountStudent(){
        return this.amountStudent;
    }
    setSubjectCode(value:any){
            this.subjectCode = value;
    }
    setAmountSelectedStudent(value:any){
        this.amountStudent= value
    }

    incrementStudentCount(){
        this.currentAmount=this.currentAmount+1; 
    }

}

export default new TeacherStore()