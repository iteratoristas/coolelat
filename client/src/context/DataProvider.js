import React, { useContext, createContext } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({
  categories: [],
  subcategories: [],
  quizzes: [],
  loading: true,
  error: false,
});

export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const { data: categories, isPending, error } = useFetch("categories");
  const { data: subcategories, isPending: loading, error: hasError } = useFetch("subcategories");
  const { data: quizzes, isPending: isLoading, error: hasErrors } = useFetch("quizzes");

  return (
    <DataContext.Provider
      value={{
        categories,
        subcategories,
        quizzes,
        loading: loading || isPending || isLoading,
        error: error || hasError || hasErrors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
