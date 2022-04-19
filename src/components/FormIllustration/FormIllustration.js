import classes from '../../assets/styles/FormIllustration.module.css'

const FormIllustration = ({image,altName}) => {
    return (
        <div className={classes.illustration}>
            <img src={image} alt={altName} />
        </div>
    );
};

export default FormIllustration;
