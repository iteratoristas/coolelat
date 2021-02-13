import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`http://localhost:5000/${endpoint}`, { signal: abortController.signal })
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
        if (error !== "AbortError") {
          setIsPending(false);
        //   setError(error.message);
        setError(true);
        }
      });

    return () => abortController.abort();
  }, [endpoint]);

  return { data, isPending, error };
};

export default useFetch;