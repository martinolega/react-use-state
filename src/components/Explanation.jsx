import {useState} from "react";
import ExplanationBox from "./ExplanationBox";

function Explanation({languages})
{
    const [selectedValue, setSelectedValue] = useState(null);

    const handleClick = (language) => {setSelectedValue(language)};

    return(
    <>
    <div>
        <div className="buttons">
            {languages.map((language) => (
                <div key={language.id}>
                    <button className={selectedValue?.title === language.title ? "active" : ""} onClick={() => handleClick(language)}>
                        {language.title}
                    </button>
                </div>
            ))}
        </div>
        {
            (selectedValue === null ? 
            <ExplanationBox 
                title={"No language selected"}
                description={"No language selected"}
                onlyDescription={true}/>
            :
            <ExplanationBox
            title={selectedValue.title}
            description={selectedValue.description}/>)
        }
    </div>
    </>
    )
}

export default Explanation;