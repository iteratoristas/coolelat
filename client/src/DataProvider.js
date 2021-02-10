import React, { useContext, useEffect, useState, createContext } from "react";

const DataContext = createContext({
    categories: [],
    subcategories: []
});

export const useData = () =>  useContext(DataContext);

export default function DataProvider({children}) {

    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((reason) => console.log(reason));

        fetch("http://localhost:5000/subcategories")
        .then((response) => response.json())
        .then((data) => setSubcategories(data))
        .catch((reason) => console.log(reason));
    }, []);

  return <DataContext.Provider value={{categories, subcategories}}>
      {children}
  </DataContext.Provider>;
}
