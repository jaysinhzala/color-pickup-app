import React, { useState, createContext } from "react";
import MyComponentB from './MyComponentB.jsx';

export const UserContext = createContext();

function MyComponent() {
    const [user, setUser] = useState("Jay");
    
    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                 <MyComponentB user={user}/>
            </UserContext.Provider>
        </div>
        );
}

export default MyComponent;