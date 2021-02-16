import React from "react";
import CategoryButton from "../components/CategoryButton";
import Flow from "../components/Flow";
import { useData } from "../context/DataProvider";
import { parsePath, unparsePath } from "../helpers/pathFunctions";

export default function Subcategory(props) {
  const data = useData();

  const location = unparsePath(props.match.params.category)
  const category = data.categories.filter(value => value.name === location)[0];

  return <Flow loading={data.loading} error={data.error} props={props} categories={data.categories} component={
    <>
      <div className="cat-title">
        <h1>{location}</h1>
        <p>{category?.description || "Short description abt the category"}</p>
      </div>
      <div className="category-names">  
      {category?.subcategories.map((el, i) => (
          <CategoryButton
            key={i}
            text={el.subcategory}
            link={parsePath(el.subcategory)}
          />
        ))}
      </div>      
    </>
  }/>
}
