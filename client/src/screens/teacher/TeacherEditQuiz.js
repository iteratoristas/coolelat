import React, { useEffect, useState } from "react";
import Flow from "../../components/Flow";
import PrimaryButton from "../../components/PrimaryButton";
import { getVariables } from "../../helpers/formulaQuestionFunctions";
import useFetch from "../../hooks/useFetch";

export default function TeacherEditQuiz(props) {
  const quizId = props?.match?.params?.quizId;
  const [newQuestions, setNewQuestions] = useState([]);

  const { isPending, error: hasError, data: quizzes } = useFetch(`teacher/quizzes/`);
    const { isPending: loading, error, data: quiz } = useFetch(`quiz/${quizId}`);
  // const { isPending: loading, error, data: quiz } = useFetch(`quiz/10`); // FOR TESTING

  // TODO: MAKE ISOLATED COMPONENT / EXTRACT + UI AND LOGIC
  const EditableComponent = ({ question, index }) => {
    //   set answer
    return (
      <form style={{ padding: "1rem", width: "100%" }}>
        <p>Question #{index + 1}</p>
        <input
          style={{ padding: "1rem", width: "100%" }}
          type="text"
          defaultValue={question?.question || ""}
        />
        {question.type === "MC" &&
          question.options.map((option, index) => {
            return (
              <div>
                {/* on select change answer  */}
                {/* on edit change current answer value  */}
                <button type="text" defaultValue={option.option}>
                  {option.option}
                </button>
              </div>
            );
          })}
        {question.type === "FQ" &&
          question.options.map((option, index) => {
            return (
              <div>
                <input type="text" value={option.variable} />
                <input type="text" value={option.min} />
                <input type="text" value={option.max} />
                <input type="text" value={option.decimal} />
              </div>
            );
          })}
        <button>Edit</button>
        <button>Delete</button>
      </form>
    );
  };

  //   TODO: IMPLEMENT LOGIC + EXTRACT
  // ONCHANGE SET NW[INDEX] TO OBJECT
  const NewQuestionComponent = ({ index }) => {
    const [object, setObject] = useState(newQuestions[index]);

    // useEffect(() => {
    //   setNewQuestions(prev => prev[index] = object);
    // }, [object, index])
    const variables = getVariables(object.question);
    return (
      <form style={{ padding: "1rem", width: "100%" }}>
        <div>
          <p>Question #{index + 1}</p>
        </div>
        {console.log(getVariables(object.question))}
        {console.log(object)}

        {/* onchange -> nW[index][type] is MC or FQ */}
        <select
          id={`select-${index}`}
          value={object.type}
          onChange={(e) =>
            setObject((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="MC">Multiple Choice</option>
          <option value="FQ">Formula Question</option>
        </select>
        {/* onvaluechange question -> */}
        <input
          style={{ padding: "1rem", width: "100%" }}
          type="text"
          value={object.question}
          onChange={(e) =>
            setObject((prev) => ({ ...prev, question: e.target.value }))
          }
        />
        <input
          style={{ padding: "1rem", width: "100%" }}
          type="text"
          name="answer"
        />
        {object.type === "FQ" &&
          variables?.map?.((item, index) => {
            return (
              <div key={index} style={{ display: "flex" }}>
                <p>{item}</p>
                <p>Min</p>
                <p>Max</p>
                <p>Decimal</p>
              </div>
            );
          })}
        <button>Edit</button>
        <button>Delete</button>
      </form>
    );
  };

  return (
    <Flow
      loading={loading || isPending}
      error={error || hasError}
      props={props}
      teacherQuizzes={quizzes?.quizzes}
      component={
        <div
          style={{
            width: "95%",
            margin: "auto",
            maxWidth: "100vw",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <h1>{quiz?.[0]?.quiz_name}</h1>
            <PrimaryButton
              text="+ Add New Question"
              style={{ width: "max-content" }}
              onClick={() =>
                setNewQuestions((prev) => [
                  ...prev,
                  { type: "MC", question: "", answer: "", options: [] },
                ])
              }
            />
          </div>
          {/* body */}
          <div style={{ width: "100%" }}>
            {quiz?.length > 0 &&
              quiz?.[0]?.question &&
              quiz.map((question, index) => (
                <EditableComponent
                  question={question}
                  key={index}
                  index={index}
                />
              ))}
          </div>
          <div style={{ width: "100%" }}>
            {console.log(newQuestions)}
            {newQuestions &&
              newQuestions?.map?.((question, index) => (
                <NewQuestionComponent key={index} index={index} />
              ))}
          </div>

          {/* TODO: NAVIGATE TO HOME ON SUCCESSFUL SAVE */}
          {quiz?.length > 0 && quiz?.[0]?.question !== null && (
            <PrimaryButton
              text="Save Changes"
              style={{ width: "max-content", alignSelf: "center" }}
            />
          )}
        </div>
      }
    />
  );
}
