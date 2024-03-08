
import { TokenManager } from './TokenManger';
import api from './instance';

export const registrationAccount =async (body:any, type:string) =>
{
if(type =="Admin"){
    await api.post(`auth/signup`, body);

}else if(type =="Teacher"){
    await api.post(`auth/signup-teacher`, body);

}else if(type =="Student"){
    await api.post(`auth/signup-student`, body);

}

}

export const authAccount = async (body:any, type:string) =>{
    
    if(type =="Admin"){
       return await api.post(`auth/signin`, body);
    
    }else if(type =="Teacher"){
        return await api.post(`auth/signin-teacher`, body);
    
    }else if(type =="Student"){
        return await api.post(`auth/signin-student`, body);
    
    }

}

export const createUniver = async (body:any)=>{
    
    const responce = await  api.post("admin/create-univer",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const setUpAttendence = async (body:any)=>{
    
    const responce = await  api.post("student/validate-attendence",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const setUpFlagForReview = async (subjectId:number)=>{
    
    const responce = await  api.post(`student/set-attendence-flag/${+subjectId}`,null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const setUpAcceptStudent = async (body:any)=>{
    
    const responce = await  api.post(`teacher/review-acception-student`,body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}




export const getStudentBySubjectIdAttendence = async (id:any)=>{
    
    const responce = await  api.get(`teacher/student-by-subj/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const getAmountStudentAttend = async (id:any)=>{
    
    const responce = await  api.get(`teacher/amount-student-attend/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const startQuize = async (name:any)=>{
    
    const responce = await  api.get(`quize/get-quize/${name}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const createQuize = async (body:any)=>{
    
    const responce = await  api.post(`quize/create-quize`,body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}




export const createSubject = async (body:any)=>{
    
    const responce = await  api.post("teacher/create-subject",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const generageTeacherKey = async ()=>{
    
    const responce = await  api.post("admin/create-teacher-token",null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const getStudentForReview = async (id:any)=>{
    
    const responce = await  api.get(`teacher/students-review/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const deleteQRCode = async (id:any)=>{
    
    const responce = await  api.delete(`/deleteQRCode?qrId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const addContents = async (id:any, body:any)=>{
    
    const responce = await  api.post(`/addContentToQR?qrId=${id}`, body,{
        headers: {
         'Content-Type': 'multipart/form-data',

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const updateQR = async (id:any, body:any)=>{
    
    const responce = await  api.put(`/updateQrCode?qrId=${id}`, body,{
        headers: {
         'Content-Type': 'multipart/form-data',

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const getQRCodes = async ()=>{
    
    const responce = await  api.get("/getQrCodes", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const getContentes = async (id:number)=>{
    
    const responce = await  api.get(`/getContents?qrId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const getContentById = async (id:number)=>{
    
    const responce = await  api.get(`/getContentById?id=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })

      
      
      return responce.data
}
export const deleteContente = async (id:any)=>{
    
    const responce = await  api.delete(`/deleteContent?id=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const createPost = async (body:any)=>{
    
    const responce = await  api.post("/createPost",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}





export const deletePost = async (id:any)=>{
    
    
    const responce = await  api.delete(`/deletePost?postId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const updatePostDesciption = async (id:any, body:any)=>{
    
    const responce = await  api.put(`/updateDescriptionPost?postId=${id}`, body,{
        headers: {

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const updatePostAccess = async (id:any, body:any)=>{
    
    const responce = await  api.put(`/updateAccessPost?postId=${id}`, body,{
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const addComment = async (body:any)=>{
    
    const responce = await  api.post("/addComment",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const getPosts = async ()=>{
    
    const responce = await  api.get("/getPosts", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const getUsersPosts = async ()=>{
    
    const responce = await  api.get("/getUsersPublicPosts", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const putReaction = async (id:any)=>{
    
    
    const responce = await  api.put(`/putReaction?postId=${id}`,null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce;
}


export const getPostByID = async (id:number)=>{
    
    const responce = await  api.get(`/getPostById?postId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })

      
      
      return responce.data
}


export const getStaticsCountQrcodeForDay = async ()=>{
    
    const responce = await  api.get("/getStaticsCountQrcodeForDay", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const getLoggerEntities = async ()=>{
    
    const responce = await  api.get("/getLoggerEntities", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const getUserRole = async ()=>{
    
    try{
        
        const responce = await  api.get("auth/user-credential", {
            headers: {
              Authorization: TokenManager.getToken()
          },
          })
          return responce.data
    }catch(e){
            
    }

}


export const getAllSubject = async ()=>{
    
    try{
        
        const responce = await  api.get("teacher/many-subject", {
            headers: {
              Authorization: TokenManager.getToken()
          },
          })
          return responce.data
    }catch(e){
            
    }

}



export const getAllSubjectForReview = async ()=>{
    
    try{
        
        const responce = await  api.get("teacher/subjects-review", {
            headers: {
              Authorization: TokenManager.getToken()
          },
          })
          return responce.data
    }catch(e){
            
    }

}


export const getCodeForQrSubject = async (id:number, liveTime:number)=>{
    
    try{
        
        const responce = await  api.post(`teacher/create-code-subject?subjectId=${id}&liveTime=${liveTime}`, null,{
            headers: {
              Authorization: TokenManager.getToken()
          },
          })
          return responce.data
    }catch(e){
            
    }

}