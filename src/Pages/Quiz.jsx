import { useEffect, useState } from "react";
import { decode } from "html-entities";

export function Quiz() {
  async function loadQuestion() {
    await fetch(
      "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setData(data.results[0]));
  }
  useEffect(() => {
    loadQuestion();
  }, []);

  const [data, setData] = useState({});
  const [rightOrWrong, setRightOrWrong] = useState("");


  function randomListOfAnswes(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  const allAnswers = data.correct_answer
    ? [data.correct_answer, ...data.incorrect_answers]
    : [];


const handelClickAnswer = (event, param) =>{
  // console.log(event);
  console.log(data.correct_answer);

  if(param.ans===data.correct_answer){
    setRightOrWrong("The awnser is correct")
    // console.log(rightOrWrong)
    // console.log(allAnswers)
    }
  else{
    setRightOrWrong("The awnser is incorrect")
    // console.log(rightOrWrong)
    // console.log(allAnswers)
    }

  }

  // --------------------------------------------------------------------------------------------- \\

  return (
    <div>
      <h1>The question is: {decode(data.question)}</h1>
      {  allAnswers.map((ans) => (
        // <button type="submit" className="button" id={decode(ans)}>{decode(ans)}</button>
        <button key={ans} className="button" onClick={event => handelClickAnswer(event, {ans}) }>
      {decode(ans)}
      </button>

      ))}

      <div><h3>{rightOrWrong}</h3></div>

    </div>



);
}
