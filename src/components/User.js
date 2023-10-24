import { useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location: Bihar</h2>
            <h2>Contact: swati@gmail.com</h2>
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
        </div>
    );
};

export default User;