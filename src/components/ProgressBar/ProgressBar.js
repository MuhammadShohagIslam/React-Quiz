import React, { useRef, useState } from "react";
import classes from "../../assets/styles/ProgressBar.module.css";
import Button from "../Form/Button";

const ProgressBar = ({
    nextQuestion,
    prevQuestion,
    progressPercentage,
    submit,
}) => {
    const [toolTip, setToolTip] = useState(false);
    const toolTipRef = useRef(null);

    const toogleToolTip = () => {
        if (toolTip) {
            setToolTip(false);
            toolTipRef.current.style.display = "none";
        } else {
            setToolTip(true);
            toolTipRef.current.style.display = "block";
            toolTipRef.current.style.left = `calc(${progressPercentage}% - 65px)`;
        }
    };

    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prevQuestion}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={toolTipRef}>
                    {progressPercentage}% Cimplete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${progressPercentage}%` }}
                        onMouseOver={toogleToolTip}
                        onMouseOut={toogleToolTip}
                    ></div>
                </div>
            </div>
            <Button
                className={classes.next}
                onClick={progressPercentage === 100 ? submit : nextQuestion}
            >
                <span>
                    {progressPercentage === 100
                        ? "Submit Quiz"
                        : "Next Question"}
                </span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
};

export default ProgressBar;
