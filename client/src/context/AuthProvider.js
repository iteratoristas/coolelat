import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  user: {},
  setUser: () => {}
});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
