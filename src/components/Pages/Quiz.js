import React, { useState, useEffect, useReducer } from "react";
import _ from "lodash";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import Answer from "../Answer/Answer";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import ProgressBar from "../ProgressBar/ProgressBar";
import useQuiz from "./../../hooks/useQuiz";
import { useAuth } from './../../context/AuthContext';

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionId].options[action.optionIndex].checked =
                action.value;
            return questions;
        default:
            return state
    }
};

const Quiz = () => {
    const [questionQuiz, dispatch] = useReducer(reducer, initialState);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { id } = useParams();
    const { loading, error, questions } = useQuiz(id);

    const {currentUser} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionId: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    };

    const nextQuestion = () => {
        if (currentQuestion < questionQuiz.length) {
            setCurrentQuestion((prevCurrentQuestion) => {
                return prevCurrentQuestion + 1;
            });
        }
    };

    const prevQuestion = () => {
        if ((currentQuestion) => 1 && currentQuestion <= questionQuiz.length) {
            setCurrentQuestion((prevCurrentQuestion) => {
                return prevCurrentQuestion - 1;
            });
        }
    };

    // submit quiz
  const submit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: questionQuiz,
    });

    navigate(`/result/${id}`, {state: questionQuiz});
  }

    const progressPercentage =
        questions.length > 0
            ? ((currentQuestion + 1) / questionQuiz.length) * 100
            : 0;

    return (
        <>
            {loading && <h2>Loading ...</h2>}
            {error && <h2>There was an error!</h2>}
            {!loading && !error && questionQuiz && questionQuiz.length > 0 && (
                <>
                    <h1>{questionQuiz[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answer
                        options={questionQuiz[currentQuestion].options}
                        handleAnswerChange={handleAnswerChange}
                    />
                    <ProgressBar
                        nextQuestion={nextQuestion}
                        prevQuestion={prevQuestion}
                        submit={submit}
                        progressPercentage={progressPercentage}
                    />
                    <MiniPlayer />
                </>
            )}
        </>
    );
};

export default Quiz;
