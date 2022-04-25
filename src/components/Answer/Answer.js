import React, { Fragment } from "react";
import classes from "../../assets/styles/Answer.module.css";
import CheckBox from "../Form/CheckBox";

const Answer = ({ options = [], handleAnswerChange, input }) => {
    return (
        <>
            <div className={classes.answers}>
                {options.map((option, index) => (
                    <Fragment key={index}>
                        {input ? (
                            <CheckBox
                                key={index}
                                onChange={(e) => handleAnswerChange(e, index)}
                                checked={option.checked}
                                className={classes.answer}
                                type="checkbox"
                            >
                                {option.title}
                            </CheckBox>
                        ) : (
                            <CheckBox
                                key={index}
                                checked={option.checked}
                                className={`${classes.answer} ${
                                    option.correct
                                        ? classes.correct
                                        : option.checked ? classes.wrong : null
                                }`}
                                type="checkbox"
                                disabled
                            >
                                {option.title}
                            </CheckBox>
                        )}
                    </Fragment>
                ))}
            </div>
        </>
    );
};

export default Answer;
