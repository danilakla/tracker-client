
import { TokenManager } from './TokenManger';
import api from './instance';

export const registrationAccount =async (body:any, type:string) =>
{
if(type =="Admin"){
    await api.post(`auth/signup`, body);

}else if(type =="Teacher"){
    await api.post(`auth/singup-teacher`, body);

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

export const createQRCode = async (body:any)=>{
    
    const responce = await  api.post("/createQRCode",body, {
        headers: {
          'Content-Type': 'multipart/form-data',
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

      console.log(responce);
      
      
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
    console.log(body);
    
    const responce = await  api.post("/createPost",body, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}





export const deletePost = async (id:any)=>{
    
    console.log(id);
    
    const responce = await  api.delete(`/deletePost?postId=${id}`, {
        headers: {
          Authorization: TokenManager.getToken()
      },
      })
      
      return responce.data
}


export const updatePostDesciption = async (id:any, body:any)=>{
    console.log(id);
    
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
        console.log(responce);
          return responce.data
    }catch(e){
            console.log(e);
            
    }

}