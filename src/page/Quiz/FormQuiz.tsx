
import { TextField } from "@mui/material";
import { log } from "console";
import { ChangeEvent, Key, useState } from "react";
import { createQuize } from "../../api";
import MenuAppBar from "../../compontents/header/auth/MenuAppBar";

export const  FormQuiz = ()=> {
    const [questuions, setQuestuions] = useState([ {question:"", questionType:"text", answerSelectionType:"single",answers:[""],correctAnswer:"0", point:'1',
    messageForCorrectAnswer: "Correct",
    messageForIncorrectAnswer: "Incorrect",
    explanation: "Result"}]);
      const [nameQuize, setQuise ] = useState()
    
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
    
    function initCorrectAnswear(event: ChangeEvent<HTMLInputElement>, index: number): void {
        const qustionmap : any = questuions.map((e:any, i)=>{
            if(index==i){
                e.correctAnswer=(event.target.value.toString())
            }
            return e;
        })

        setQuestuions([...qustionmap])

    }

       const handleGenerateJSON = async () => {
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
        console.log(JSON.stringify(data, null, 2));
      };
    
      return (

        <div>
       <MenuAppBar></MenuAppBar> 
          <h1>Quiz Form</h1>
    
          <label>
            Quiz Title:
            <TextField
              type="text"
              name="quizTitle"
              onChange={handleQuizChange}
            />
          </label>
    
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
              {q.answers.map((answer:string, answerIndex: number) => (
                <label key={answerIndex}>
                  Answer {answerIndex + 1}:
                  <input
                    type="text"
                    onChange={(event) => handleAnswerChange(event, index, answerIndex)}
                  />
                </label>
              ))}
    
              <button onClick={() => handleAddAnswer(index)}>Add Answer</button>
              <div></div>
              init correct answear
              <input
                    type="number"
                    onChange={(event) => initCorrectAnswear(event, index)}
                  />
            <hr/>
            </div>

            
          ))}
    
          <button onClick={handleAddQuestion}>Add Question</button>
          <button onClick={handleGenerateJSON}>Save  Quize</button>
        </div>
      );
}


