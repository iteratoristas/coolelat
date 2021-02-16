import React from "react";
import CategoryButton from "../components/CategoryButton";
import Flow from "../components/Flow";
import { useData } from "../context/DataProvider";
import { parsePath } from "../helpers/pathFunctions";

export default function Category(props) {
  const data = useData();

  return (
    <Flow
      loading={data.loading}
      error={data.error}
      props={props}
      component={
        <>
          <div className="cat-title">
            <h1>Categories:</h1>
          </div>
          <div className="category-names">
            {data.categories.map((element, index) => {
              return (
                <CategoryButton
                  key={index}
                  text={element.name}
                  link={parsePath(element.name)}
                  type="button"
                />
              );
            })}
          </div>
          <div className="calculator2"></div>
          <div className="evaluation"></div>
          <div className="presentation"></div>
        </>
      }
    />
  );
}
