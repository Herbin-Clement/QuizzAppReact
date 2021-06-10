import React, { useState } from 'react';

const Input = ({ placeholder, isSelected, id, select, changeValue }) => {

    let borderColor = isSelected ? "border-cloud" : "border-amethist";

    const [value, setValue] = useState("");    

    const updateValue = (event) => {
        const { value } = event.target;
        setValue(() => value);
        changeValue(value, id);
    }

    return (
        <input onClick={() => select(id)} onChange={(event) => updateValue(event)} placeholder={placeholder} value={value} className={`w-4/10 h-12 mt-2 p-2 border-b-2 ${borderColor} outline-none text-xl bg-black0`}/>
    )
};

export default Input;