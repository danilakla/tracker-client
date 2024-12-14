
import { Button, TextField } from "@mui/material";
import { ChangeEvent, Key, useEffect, useRef, useState } from "react";
import { createQuize, getUserRole } from "../../api";
import MenuAppBar from "../../compontents/header/auth/MenuAppBar";
import { useNavigate } from "react-router-dom";

export const  FormQuiz = ()=> {
    const [questuions, setQuestuions] = useState([ {question:"", questionType:"text", answerSelectionType:"single",answers:[""],correctAnswer:"0", point:'1',
    messageForCorrectAnswer: "Correct",
    messageForIncorrectAnswer: "Incorrect",
    explanation: "Result"}]);
      const [nameQuize, setQuise ] = useState()
      const handleScroll = (percent:number) => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        
      };
      useEffect(()=>{
        setUserRole();
      },[])
      const navigate = useNavigate()
  async function setUserRole() {
    try {
        const role1= await getUserRole();
        if(role1.role!="TEACHER") navigate("login")
    } catch (error) {
      
      navigate('/login')
    }
  
  }
      const handleQuizChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setQuise(value)
      };
    
      const handleAddQuestion = () => {
        
        setQuestuions([
            ...questuions, {question:"", questionType:"text", answerSelectionType:"single",answers:[""],correctAnswer:"0", point:'1',messageForCorrectAnswer: "Correct",
            messageForIncorrectAnswer: "Incorrect",
            explanation: "Result"}
        ])
        handleScroll(5);
      };
    
      const handleQuestionChange = (event:any, index: number) => {
        const { name, value } = event.target;
        
        const qustionmap : any = questuions.map((e:any, i)=>{
            if(index==i){
                e.question=value
            }
            return e;
        })

                    
        setQuestuions([...qustionmap])
            
      };
    
      const handleAddAnswer = (questionIndex:  number) => {
       
        const qustionmap : any = questuions.map((e:any, i)=>{
            if(questionIndex==i){
                e.answers.push("")
                        }
            return e;
        })

        setQuestuions([...qustionmap])
      };
    
      const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>, index: number, answerIndex:  number) => {
        const { value } = event.target;

        const qustionmap : any = questuions.map((e:any, i)=>{
            if(index==i){
                e.answers[answerIndex]=value
            }
            return e;
        })

        setQuestuions([...qustionmap])

      };
      function validateQuestions(questions:any) {
        questions.forEach((item :any, index:any) => {
            // Check if 'question' is not empty
            const isQuestionValid = item.question.trim() !== "";
    
            // Check if 'correctAnswer' is specified and is a valid index
            const isCorrectAnswerValid = item.correctAnswer && !isNaN(parseInt(item.correctAnswer));
    
            // Check if 'answers' has at least one non-empty value
            const areAnswersValid = Array.isArray(item.answers) && item.answers.some((answer:any) => answer.trim() !== "");
    
            // If any validation fails, throw a general exception
            if (!isQuestionValid || !isCorrectAnswerValid || !areAnswersValid) {
                throw new Error(`Validation failed for question at index ${index+1}, because some fields are empty`);
            }
        });
    }
    function initCorrectAnswear(event: ChangeEvent<HTMLInputElement>, index: number): void {
        let a=false;
      const qustionmap : any = questuions.map((e:any, i)=>{
            if(index==i){
                e.correctAnswer=(event.target.value.toString())
                if(e.answers.length<e.correctAnswer){
                  alert("bad parameters");
                  event.target.value ='';
                }
              }
      
            return e;
        })
          setQuestuions([...qustionmap])

    }

       const handleGenerateJSON = async () => {
        try {
          validateQuestions(questuions)
          const data = await createQuize({
            name:nameQuize,
            formtest:     JSON.stringify({
                quizTitle:nameQuize,
                quizSynopsis:"Test",
                questions:questuions
            })
        })
        JSON.stringify({
            quizTitle:nameQuize,
            quizSynopsis:"Test",
            questions:questuions
        })
        alert('success')
        window. location. reload(); 
        } catch (error :any) {
          alert('bad request'+error.message)      
        }


      };
    
      return (
<>
       <MenuAppBar name={'Quiz Generation Form '} ></MenuAppBar> 
       <div style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>

    <div style={{display:'flex', flexDirection:"column", justifyContent:'center'}}>
              <h1>Quize Title:</h1>
            <TextField
              type="text"
              name="quizTitle"
              onChange={handleQuizChange}
            />
</div>

        <div style={{border:1, borderColor:'gray', margin:10}}> 
          
          <h3>Questions:</h3>
          {questuions.map((q:any, index)=> (
            <div>
              <label>
                Question
                <TextField
                onChange={(event)=>handleQuestionChange(event, index)}
              />
              </label>
    
              <h4>Answers:</h4>
              <div style={{display:'flex', flexDirection:'column', margin:10}}>
              {q.answers.map((answer:string, answerIndex: number) => (
                <label key={answerIndex} style={{margin:10}}>
                   {answerIndex + 1}:
                  <input
                    type="text"
                    onChange={(event) => handleAnswerChange(event, index, answerIndex)}
                  />
                </label>
              ))}
              </div>
    
              <Button onClick={() => handleAddAnswer(index)}>Add Answer</Button>
              <div></div>
                Specify correct answear
              <input
                    type="number"
                    onChange={(event) => initCorrectAnswear(event, index)}
                  />
            <hr/>
            </div>

            
          ))}
    </div>
          <Button onClick={handleAddQuestion}>Add Question</Button>
          <Button onClick={handleGenerateJSON}>Save  Quize</Button>

          </div>
          </>
      );
}


