import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  // const [prompt, setPrompt] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((response) => response.json())
    .then((questions) =>
     setQuestions(questions));
  }, []);

  const questionItems = questions.map((quest) => (
    <QuestionItem
      key={quest.id}
      question={quest}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {questionItems}  </ul>
    </section>
  );
}

export default QuestionList;
