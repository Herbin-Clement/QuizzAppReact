import React from 'react';

const CategoryCard = ({ category, isSelected, changeCatSelected }) => {

    let borderColor = isSelected ? "border-cloud" : "border-amethist";

    return (
        <div onClick={() => changeCatSelected(category)} className={`flex justify-center items-center w-15p h-5/10 m-2 p-1 border-2 ${borderColor} rounded bg-black1 hover:bg-black05 text-center text-xl text-cloud cursor-pointer select-none`}>
            {category}
        </div>
    )
}

export default CategoryCard;