import React, { useState } from 'react'
import { addComment, createPost, deletePost, putReaction, updatePostAccess, updatePostDesciption } from '../../api';
import { Form } from 'react-router-dom';

function PostQR() {
  const [idQR, setIdQR]: any = useState();
  const [text, setText]: any = useState();
  const [comment, setComment]: any = useState();
  const [isPublic, setPublic]: any = useState();
  const [postId, setpostId]: any = useState();

  function test(e: any) {

    setPublic(true)
  }
  function test2(e: any) {

    setPublic(false)
  }
  return (
    <div>

      <h1>Post</h1>
      <div>
        <p>create post</p>
        <p>id</p>
        <input type='text' onChange={e => setIdQR(e.target.value)} />
        <p>text</p>

        <input type='text' onChange={e => setText(e.target.value)} />
        <div></div>
        <input type='checkbox' onChange={e => test(e)} />
        <p>true</p>
        <input type='checkbox' onChange={e => test2(e)} />
        <p>false</p>

        <button onClick={ async e=>{
          console.log(text);
          console.log(isPublic);
          console.log(idQR);
          const formData = new FormData();
formData.append('description', text)
formData.append('isPublic', isPublic)
formData.append('qrId', idQR)

          const response = await createPost(formData)
          console.log(response);
           
        }}>create post</button>
      </div>

    <div>
      <h1>Put reaction</h1>
      <p>post id </p>
    
      <input type='text' onChange={e => setpostId(e.target.value)} />

      <button onClick={ async e=>{
          const response = await  putReaction(postId) 
        }}>Put reaction</button>
        
    </div>


    <div>
      <h1>Delete Post</h1>
      <p>post id </p>
    
      <input type='text' onChange={e => setpostId(e.target.value)} />

      <button onClick={ async e=>{
          const response = await deletePost(postId) 
        }}>delete post</button>
    </div>

    <div>
      <h1>Update Access</h1>
      <p>post id </p>
    
      <input type='text' onChange={e => setpostId(e.target.value)} />
      <div></div>
        <input type='checkbox' onChange={e => test(e)} />
        <p>true</p>
        <input type='checkbox' onChange={e => test2(e)} />
        <p>false</p>
        <button onClick={ async e=>{
                    const formData = new FormData();
                    formData.append('isPublic', isPublic)
                    
          const response = await updatePostAccess(postId ,formData) 
          console.log(response);
          
        }}>update access post</button>
    </div>
    
    <div>
      <h1>Update Desciption</h1>
    
      <p>post id </p>

      <input type='text' onChange={e => setpostId(e.target.value)} />
      <div>

      </div>
      <p>text </p>

      <input type='text' onChange={e => setText(e.target.value)} />
      <button onClick={ async e=>{
                    const formData = new FormData();
                    formData.append('description', text)
                    
          const response = await updatePostDesciption(postId ,formData) 
          console.log(response);
          
        }}>update text post</button>

    </div>


    <div>
      <h1>Add  Comment</h1>
      <input type='text' onChange={e => setpostId(e.target.value)} />
    
      <div>
        
      </div>
      <input type='text' onChange={e => setComment(e.target.value)} />
  
      <button onClick={ async e=>{
                    const formData = new FormData();
                    formData.append('text', comment)
                    formData.append('postId', postId)

          const response = await addComment(formData) 
          console.log(response);
          
        }}>update text post</button>

    </div>
    </div>


  )
}

export default PostQR