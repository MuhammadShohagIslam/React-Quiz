import React from "react";
import classes from "../../assets/styles/Answer.module.css";
import CheckBox from "../Form/CheckBox";

const Answer = ({ options = [], handleAnswerChange }) => {
    return (
        <>
            <div className={classes.answers}>
                {options.map((option, index) => (
                    <CheckBox
                        key={index}
                        onChange={(e) => handleAnswerChange(e, index)}
                        checked={option.checked}
                        className={classes.answer}
                        type="checkbox"
                    >
                        {option.title}
                    </CheckBox>
                ))}
            </div>
        </>
    );
};

export default Answer;
