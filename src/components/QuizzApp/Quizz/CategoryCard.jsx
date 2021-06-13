import React from 'react';

const CategoryCard = ({ category, isSelected, id, toggleCategory }) => {

    let borderColor = isSelected ? "border-cloud" : "border-amethist";

    return (
        <div onClick={() => toggleCategory(id)} className={`flex justify-center items-center w-1/10 h-1/10 m-2 p-1 border-2 ${borderColor} rounded bg-black1 hover:bg-black05 text-center text-xl text-cloud cursor-pointer select-none`}>
            {category}
        </div>
    )
}

export default CategoryCard;