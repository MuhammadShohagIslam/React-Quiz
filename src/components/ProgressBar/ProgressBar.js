import React from "react";
import classes from "../../assets/styles/ProgressBar.module.css";
import Button from "../Form/Button";


const ProgressBar = ({ nextQuestion, prevQuestion , progressPercentage, submit }) => {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prevQuestion}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{progressPercentage}% Cimplete!</div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            <Button className={classes.next} onClick={ progressPercentage === 100 ? submit : nextQuestion}>
                <span>{progressPercentage === 100 ? "Submit Quiz" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
};

export default ProgressBar;
