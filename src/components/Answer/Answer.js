import React from 'react';
import CheckBox from "../Form/CheckBox";
import classes from '../../assets/styles/Answer.module.css'

const Answer = () => {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} type="checkbox">A New Hope 1</CheckBox>
        </div>
    );
};

export default Answer;
