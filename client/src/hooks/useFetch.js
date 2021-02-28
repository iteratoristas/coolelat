import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    /** this allows us to control the fetch */
    const abortController = new AbortController();

    /** this 'binds' the fetch to the abort controller */
    fetch(`http://localhost:5000/${endpoint}`, { signal: abortController.signal, headers: {"Authorization": "Bearer " + localStorage.getItem('coolelat_token')} })
      .then((res) => {
        if (!res.ok) throw Error("Could not connect to get requested resource");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(false);
      })
      .catch((error) => {
        /** the abor controller throws an error [which we don't want] so we only catch an error that is not an abort controller error */
        if (error !== "AbortError") {
          setIsPending(false);
        //   setError(error.message);
        setError(true);
        } 
      });

    /** this is to fix unmounted error if we switch pages while the fetch is still running */
    return () => abortController.abort();
  }, [endpoint]);

  return { data, isPending, error };
};

export default useFetch;