import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const token = localStorage.getItem("coolelat_token");

    if (token) {
      fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: {
          "Content-Type":  "application/json; charset=UTF-8",
          "Authorization": "Bearer " + token
        },
        signal: abortController.signal
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAuthenticated(true);
            setUser(data.user);
            console.log(data);
          } else {
            setAuthenticated(false);
            localStorage.removeItem("coolelat_token");
          }
        });
    } else {
      localStorage.removeItem("coolelat_token");
      setAuthenticated(false);
      setUser({});
    }

    return () => abortController.abort();
  }, [authenticated]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
