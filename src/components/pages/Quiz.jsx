import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../hooks/useAuth";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import ProgessBar from "../ProgessBar";

const QUESTIONS = "QUESTIONS";
const TOGGLE_ANSWER = "TOGGLE_ANSWER";

const initialState = {
  qna: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case QUESTIONS: {
      const mutatedQuestions = payload.map((question) => ({
        ...question,
        options: question.options.map((opt) => ({
          ...opt,
          checked: false,
          id: uuid(),
        })),
      }));
      return { ...state, qna: mutatedQuestions };
    }

    case TOGGLE_ANSWER: {
      const { currentQuestion, optionIndex, checked } = payload;
      const questions = _.cloneDeep(state.qna);
      questions[currentQuestion].options[optionIndex].checked = checked;
      return { ...state, qna: questions };
    }
    default:
      return state;
  }
};

const Quiz = () => {
  const { videoId } = useParams();
  const { authUser } = useAuth();
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(videoId);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: QUESTIONS, payload: questions });
  }, [questions]);

  const onChangeAnswer = (e, optionIndex) => {
    const { checked } = e.target;
    dispatch({
      type: TOGGLE_ANSWER,
      payload: {
        currentQuestion,
        optionIndex,
        checked,
      },
    });
  };

  const prevQuestion = () => {
    if (currentQuestion >= 1 && questions.length - 1) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const submit = async () => {
    const { uid } = authUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [videoId]: state.qna,
    });

    history.push({
      pathname: `/result/${videoId}`,
      state: {
        qna: state.qna,
      },
    });
  };

  const percentage =
    questions.length > 0
      ? Math.floor(((currentQuestion + 1) / questions.length) * 100)
      : 0;

  return (
    <>
      {state.qna.length > 0 && (
        <Fragment>
          <h1>{state.qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            useAnalysis
            options={state.qna[currentQuestion].options}
            onChangeAnswer={onChangeAnswer}
          />
          <ProgessBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
          <Miniplayer />
        </Fragment>
      )}

      {!loading && state.qna.length === 0 && <div>No Data found</div>}
      {error && <div>Therer was an error</div>}
      {loading && <div>Loading....</div>}
    </>
  );
};

export default Quiz;
