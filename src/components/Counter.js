import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    // when plus button is clicked
    function handlePlusClick() {
        setCount(count + 1);
    }

    // when minus button is clicked 
    function handleMinClick() {
        if(count>0) {
            setCount(count - 1);
        }
    }
    return(
        <div className="counter-container">
            <div className="display-count">{count}</div>
            <button onClick={handleMinClick} className="minus btn">-</button>
            <button onClick={handlePlusClick} className="plus btn">+</button>
        </div>
    );
}