
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

type ApiResponse = {
  results: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }[];
};



function App() {
  const [question,setQuestion] = useState<ApiResponse['results']>([])
  const [anfag,setAnfag] = useState<Boolean>(false)




 

useEffect(()=>{
  const cagr =async ()=>{
       const data = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
       //console.log(data.data.results)
       setQuestion(data.data.results)
  }
  cagr()
},[])

const start = ()=>{
  const updated =  question.map((question) => ({
    ...question,
    sonl: question.incorrect_answers.concat(question.correct_answer),
  }));


  setQuestion(updated);
  setAnfag(true)

}
  //console.log(question,'start')






 return (
  <div>
     
     <h1>REACT QUIZ</h1>
     {
      !anfag ? ( 
        <div>       <button className="start" onClick={start}>Start</button>
     <p className="score">Score:</p>
     <p>Loading Question......</p>
     
    </div>
   
      ):(   <Card questions={question} />)
     }
   

  </div>)
}

export default App;
