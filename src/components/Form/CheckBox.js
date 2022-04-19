const CheckBox = ({children, ...rest}) => {
    return (
        <>
            <label>
                <input {...rest} />
                <span>{children}</span>
            </label>
        </>
    );
};

export default CheckBox;
