import classes from "../../assets/styles/Question.module.css";
import Answer from "../Answer/Answer";

const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answer />
        </div>
    );
};

export default Question;
