
import { TokenManager } from './TokenManger';
import api from './instance';

export const registrationAccount =async (body:any, type:string) =>
{
if(type =="Admin"){
    await api.post(`api/auth/signup`, body);

}else if(type =="Teacher"){
    await api.post(`api/auth/signup-teacher`, body);

}else if(type =="Student"){
    await api.post(`api/auth/signup-student`, body);

}

}

export const authAccount = async (body:any, type:string) =>{
    
    if(type =="Admin"){
       return await api.post(`api/auth/signin`, body);
    
    }else if(type =="Teacher"){
        return await api.post(`api/auth/signin-teacher`, body);
    
    }else if(type =="Student"){
        return await api.post(`api/auth/signin-student`, body);
    
    }

}

export const createUniver = async (body:any)=>{
    
    const responce = await  api.post("api/admin/create-univer",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const setUpAttendence = async (body:any)=>{
    
    const responce = await  api.post("api/student/validate-attendence",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const setUpFlagForReview = async (subjectId:number)=>{
    
    const responce = await  api.post(`api/student/set-attendence-flag/${+subjectId}`,null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const setUpAcceptStudent = async (body:any)=>{
    
    const responce = await  api.post(`api/teacher/review-acception-student`,body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}




export const getStudentBySubjectIdAttendence = async (id:any)=>{
    
    const responce = await  api.get(`api/teacher/student-by-subj/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const getAmountStudentAttend = async (id:any)=>{
    
    const responce = await  api.get(`api/teacher/amount-student-attend/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const startQuize = async (name:any)=>{
    
    const responce = await  api.get(`api/quize/get-quize/${name}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const createQuize = async (body:any)=>{
    
    const responce = await  api.post(`api/quize/create-quize`,body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}




export const createSubject = async (body:any)=>{
    
    const responce = await  api.post("api/teacher/create-subject",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const generageTeacherKey = async ()=>{
    
    const responce = await  api.post("api/admin/create-teacher-token",null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const updateUniverByName = async (body:any)=>{
    
    const responce = await  api.put("api/admin/update-univer",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const deleteUniverAdm = async ()=>{
    
    const responce = await  api.delete(`api/admin/delete-univer`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const getUniverForAdmin = async ()=>{
    
    const responce = await  api.get(`api/admin/get-univer`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
        console.log(responce.data);
      return responce.data
}

export const getStudentForReview = async (id:any)=>{
    
    const responce = await  api.get(`api/teacher/students-review/${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const deleteQRCode = async (id:any)=>{
    
    const responce = await  api.delete(`api/deleteQRCode?qrId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const addContents = async (id:any, body:any)=>{
    
    const responce = await  api.post(`api/addContentToQR?qrId=${id}`, body,{
        headers: {
         'Content-Type': 'multipart/form-data',

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const updateQR = async (id:any, body:any)=>{
    
    const responce = await  api.put(`api/updateQrCode?qrId=${id}`, body,{
        headers: {
         'Content-Type': 'multipart/form-data',

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const getQRCodes = async ()=>{
    
    const responce = await  api.get("api/getQrCodes", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const getContentes = async (id:number)=>{
    
    const responce = await  api.get(`api/getContents?qrId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const getContentById = async (id:number)=>{
    
    const responce = await  api.get(`api/getContentById?id=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })

      
      
      return responce.data
}
export const deleteContente = async (id:any)=>{
    
    const responce = await  api.delete(`api/deleteContent?id=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const createPost = async (body:any)=>{
    
    const responce = await  api.post("api/createPost",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}





export const deletePost = async (id:any)=>{
    
    
    const responce = await  api.delete(`api/deletePost?postId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const updatePostDesciption = async (id:any, body:any)=>{
    
    const responce = await  api.put(`api/updateDescriptionPost?postId=${id}`, body,{
        headers: {

          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const updatePostAccess = async (id:any, body:any)=>{
    
    const responce = await  api.put(`api/updateAccessPost?postId=${id}`, body,{
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const addComment = async (body:any)=>{
    
    const responce = await  api.post("api/addComment",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}



export const getPosts = async ()=>{
    
    const responce = await  api.get("api/getPosts", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const getUsersPosts = async ()=>{
    
    const responce = await  api.get("api/getUsersPublicPosts", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const putReaction = async (id:any)=>{
    
    
    const responce = await  api.put(`api/putReaction?postId=${id}`,null, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce;
}


export const getPostByID = async (id:number)=>{
    
    const responce = await  api.get(`api/getPostById?postId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })

      
      
      return responce.data
}


export const getStaticsCountQrcodeForDay = async ()=>{
    
    const responce = await  api.get("api/getStaticsCountQrcodeForDay", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}
export const getLoggerEntities = async ()=>{
    
    const responce = await  api.get("api/getLoggerEntities", {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}

export const getUserRole = async ()=>{
    
    try{
        
        const responce = await  api.get("api/auth/user-credential", {
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
        
        const responce = await  api.get("api/teacher/many-subject", {
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
        
        const responce = await  api.get("api/teacher/subjects-review", {
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
        
        const responce = await  api.post(`api/teacher/create-code-subject?subjectId=${id}&liveTime=${liveTime}`, null,{
            headers: {
              Authorization: TokenManager.getToken()
          },
          })
          return responce.data
    }catch(e){
            
    }

}