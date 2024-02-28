import { makeAutoObservable } from "mobx";

class TeacherStore{


    subjectCode = "";
    constructor(){
            makeAutoObservable(this)
    }

    get getsubjectCode(){
        return this.subjectCode;
    }

    setSubjectCode(value:any){
            this.subjectCode = value;
    }

}

export default new TeacherStore()