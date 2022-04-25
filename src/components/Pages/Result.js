import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis/Analysis";
import Summary from "../Summary/Summary";
import useAnswers from "./../../hooks/useAnswers";

const Result = () => {
    const { id } = useParams();
    const { loading, error, answers } = useAnswers(id);
    const { state } = useLocation();
    const questionQuiz = state;

    const calculate = () => {
        let score = 0;

        let correctAnswerIndex = [];
        let checkQuizAnswerIndex = [];

        answers.forEach((question, index1) => {
            question.options.forEach((option, index2) => {
                if (option.correct) {
                    correctAnswerIndex.push(index2);
                }

                if (questionQuiz[index1].options[index2].checked) {
                    checkQuizAnswerIndex.push(index2);
                    option.checked = true;
                }
                if (_.isEqual(correctAnswerIndex, checkQuizAnswerIndex)) {
                    score = score + 5;
                }
            });
        });

        return score;
    };
    const userScore = calculate();
    console.log(answers)
    
    return (
        <>
            {loading && <h2 className="text-center">Loading ...</h2>}
            {error && <h2 className="text-center">There was an error!</h2>}
            {!loading && !error && answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
};

export default Result;
