const CheckBox = ({children,className, ...rest}) => {
    return (
        <>
            <label className={`${className}`}>
                <input {...rest} />
                <span>{children}</span>
            </label>
        </>
    );
};

export default CheckBox;
