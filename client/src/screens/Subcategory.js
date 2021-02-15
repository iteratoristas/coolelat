import React, { useState, useEffect } from "react";
import CategoryButton from "../components/CategoryButton";
import QuizCardTop from "../components/QuizCardTop"
import { useData } from "../DataProvider";

export default function Subategory(props) {
  const [subcategories, setSubcategories] = useState([]);
  const data = useData().categories;

  const path = props.location.pathname.split("/");
  const location = path[path.length - 1];

  useEffect(() => {
    if (data.length > 0) {
      setSubcategories(
        data.filter(
          (value) => value.name.toLowerCase() === location.replaceAll("-", " ")
        )
      );
    } else {
      fetch(`http://localhost:5000/categories/${location}`)
        .then((response) => response.json())
        .then((data) => setSubcategories(data))
        .catch((reason) => console.log(reason));
    }
  }, [data, location]);

  return (
    <>
      <div className="cat-title">
        <h1>Category name</h1>
        <p>Short description abt the category</p>
      </div>
      <div className="category-names">  
      {
        subcategories[0]?.subcategories?.map((el, i) => (
            <CategoryButton text={el.subcategory} link={el.subcategory}/>
        ))
      }
      </div>
    </>
  );
}
