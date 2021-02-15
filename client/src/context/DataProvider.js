import React, { useContext, createContext } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({
  categories: [],
  subcategories: [],
  loading: true,
  error: false,
});

export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const { data: categories, isPending, error } = useFetch("categories");
  const { data: subcategories, isPending: loading, error: hasError } = useFetch("subcategories");

  return (
    <DataContext.Provider
      value={{
        categories,
        subcategories,
        loading: loading || isPending,
        error: error || hasError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
