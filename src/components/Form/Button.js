import classes from '../../assets/styles/Button.module.css'
const Button = ({children}) => {
    return (
        <>
            <div className={classes.button}>
                <span>{children}</span>
            </div>
        </>
    );
};

export default Button;
