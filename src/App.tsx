//import Card from "./components/Card";
import { fetchQuizQuestions } from './Api'
import {useState} from 'react'
import { Difficulty } from './Api'


function App() {
 const [ loading,setLoading] = useState(false)
 const [ questions,setQuestions] = useState([])
 const [ number,setNumber] = useState(0)
 const [ userAnswers,setUserAnswers] = useState([])
 const [ score,setScore] = useState(0)
 const [ gameOver,setGameOver] = useState(true)
 const TOTAL_QUESTIONS = 10

 console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

  const startTrvia = async()=>{}

  const check =(e:React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = ()=>{

  }
 return (
  <div>
     
     <h1>REACT QUIZ</h1>
     <button className="start" onClick={startTrvia}>Start</button>
     <p className="score">Score:</p>
     <p>Loading Question......</p>
     {/* <Card
     questionNr = {number+1}
     totalQuestions={TOTAL_QUESTIONS}
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswers={userAnswers ? userAnswers[number] :undefined}
     callback={check}

     
     
     /> */}
     <button className="next" onClick={nextQuestion}>Next Question</button>

  </div>)
}

export default App;
