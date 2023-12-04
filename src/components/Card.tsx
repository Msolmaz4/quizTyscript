import React, { useEffect, useState } from "react";

type QuestionProps = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  count:number;
 
};
const Card: React.FC<{ questions: QuestionProps }> = ({ questions }) => {
  console.log(questions);

  const [count, setCount] = useState<number>(0);
  const [back, setBack] = useState<boolean>(false);
  const [core,setCore] = useState<number>(0)

  const artis = () => {
    if (count < 9) {
      console.log(count);
      setCount((prev) => prev + 1);
    } else {
      alert("fertig");
      window.location = "/";
    }
  };
  const derleme = (gel: string, count: number) => {
    console.log(gel);
    if (gel === questions[count].correct_answer) {
      setBack(true);
      setCore((prev) => prev + 1);

    } else {
      console.log("hatali");
    }
    artis ()
  };

  return (
    <div>
     
      <div>soru:{count}</div>
      <div>{questions[count].question}</div>
      <ul>
        {questions[count].sonl.map((item) => (
          <div
            onClick={() => {
              derleme(item, count);
            }}
          >
            <li>{item}</li>
          </div>
        ))}
      </ul>
<div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
    <div style={{border:'2px solid red', width:'60px', height:'50px', display:'flex', justifyContent:'center',borderRadius:'100%',alignItems:'center'}}>{core}/10</div>
    </div>
</div>
     
  );
};

export default Card;
