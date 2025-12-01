function ExplanationBox({ title, description, onlyDescription }) {
    return (
        <div className="explanation-box">
            {
                (onlyDescription === true ? 
                <>
                <p className="bigger-font">
                    {title}
                </p>
                </>
                :
                <>
                <h2 className="bigger-font mb-20">
                    {title}
                </h2>
                <p className="bigger-font">
                    {description}
                </p>
                </>
                )
            }
        </div>
    )
}

export default ExplanationBox;