import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ChatIcon from '@mui/icons-material/Chat'; // Import the ChatIcon
import { observer } from 'mobx-react-lite';
import { addComment, putReaction } from '../../api';
import { useNavigate } from 'react-router-dom';

const  NewsPostCard = ({ post, isComment }:any) => {

    const navigate =useNavigate()
    const [likes, setLikes] = useState<any>(post.profiles.length);
        const [comment, setComment] = useState<any>('');
        const [reactions, setReactions] = useState<any>([]);
        const [countComments, setcountComments] = useState<any>(post.commentEntities.length);
     
        const handleLike =async  () => {
            try{

              const res=  await putReaction(post.id);
                    if(res.data==1){
                        setLikes(likes+1);
                        
                    }

            }
            catch(e){
                
            }
            
        };
        const navigateToPostComment =()=>{

            navigate(`/commentPage?postId=${post.id}`)
        }
        const handleCommentChange = (event:any) => setComment(event.target.value);

        const handleCommentCount = async (event:any)=>{
            event.preventDefault()

                 const formdata:FormData =new FormData()
                 
                formdata.append("text",comment)
                formdata.append("postId",post.id)
            const data= await addComment(formdata);
            setcountComments(countComments+1);
            window.location.reload();
        }
  
   
        return (
            <div className="post" style={{ padding: '20px', border: '1px solid #ddd', marginBottom: '20px' }}>
                <div>
                    <p style={{marginBottom:10}}>Create by: {post.profile.email}   
                    <span>        *{post.creationDate}</span></p>

                    <h2 style={{marginBottom:10}}>{post.qrEntity.name}</h2>
                </div>
                <div style={{ backgroundColor:'black', display: 'flex', justifyContent: 'center' }}>
                
               <img  src={"data:image/jpeg;base64,"+post.qrEntity.image} alt="Post Image" style={{ padding:10,width: '40%', height:"auto" }} />
               </div>
               <div style={{ marginBottom: '20px' }}>{post.description}</div>

                <IconButton onClick={handleLike} color="primary">
                    <ThumbUpIcon  />
                </IconButton>

                
                {likes}
                <IconButton  onClick={navigateToPostComment}>
                   <ChatIcon />
               </IconButton>
               {countComments}

                <div style={{ marginTop: '10px' }}>
                    {reactions.map((reaction:any, index:any)=> (
                        <span key={index}>{reaction} </span>
                    ))}
                </div>
           
           {isComment&&
           <form onSubmit={handleCommentCount} style={{ marginTop: '20px' }}>
           <div>
           <TextField
               fullWidth
               variant="outlined"
               value={comment}
               onChange={handleCommentChange}
               placeholder="Add a comment..."
           sx={{maxWidth:500}}
           />
           </div>
           
           <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
               Submit
           </Button>
       </form>}
                
            </div>
        );
     };
    export default observer(NewsPostCard)