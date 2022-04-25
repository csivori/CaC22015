import { createContext } from "react";

export const ContextoDeLogin = createContext();

return (
    <ContextoDeLogin.Provider
        value={{
            username,
            setUsername,
            
        }}
    >
        {children}
    </ContextoDeLogin.Provider>
);