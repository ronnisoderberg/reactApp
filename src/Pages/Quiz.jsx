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

  const allAnswers = data.correct_answer
    ? [data.correct_answer, ...data.incorrect_answers]
    : [];

  function RandomListOfAnswes(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

    function HandleAnswer(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  

  
  // ---------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>The question is: {decode(data.question)}</h1>


      { RandomListOfAnswes( allAnswers).map((ans) => (
        <button type="button" className="button" id={decode(ans)}>{decode(ans)}</button>
      ))}
{/* 
<form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form> */}




    </div>



);
}

// import { useState } from "react";
// import Header from "../components/Header";
// import { decode } from "html-entities";

// const randomizeArray = (arr) => {
//   let i = arr.length;
//   while (--i > 0) {
//     let randIndex = Math.floor(Math.random() * (i + 1));
//     [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
//   }
//   return arr;
// }

// export function Home() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     const loadQuestion = () =>
//       setData((await (await fetch(
//         "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
//       )).json()).results[0])
//     loadQuestion();
//   }, []);

//   const answers = randomizeArray([data.correct_answer, ...(data.incorrect_answers ?? [])])
