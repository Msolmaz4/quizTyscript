import React, { useEffect, useState } from "react";

type QuestionProps = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
const Card: React.FC<{ questions: QuestionProps }> = ({ questions }) => {
  console.log(questions);
 
  const [count, setCount] = useState<number>(0);
  const artis = () => {
    setCount(prev=>prev+1)
  
  };
  

  return (
    <div>
      <div>soru:{count}</div>
      <div>{questions[count].question
}</div>
<ul>
{
 questions[count].sonl.map((item)=>(
  <div onClick={()=>{
   if(item === questions[count].correct_answer){
    console.log('first')
   }
   else console.log('hatali')
  }}> 
     <li>{item}</li>
  </div>
 
 ))
}
</ul>
 

      <button onClick={artis}>next</button>
    </div>
  );
};

export default Card;
