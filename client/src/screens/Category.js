import React from 'react'
import CategoryButton from '../components/CategoryButton'
import data from "../mock/categories"


export default function Category() {

    return (
        <>
            <div className="cat-title">
                <h1>Categories:</h1>
            </div>
            {data.map((element, index) => {
                return (
                    <CategoryButton
                        key={index}
                        text={element.categoryName}
                        link={element.link}
                        type="button"
                />
                )
            })}
        </>
    )
}
