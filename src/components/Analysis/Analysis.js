import React from 'react';
import Question from "../Question/Question";
import classes from '../../assets/styles/Analysis.module.css';

const Analysis = () => {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <Question />
        </div>
    );
};

export default Analysis;
