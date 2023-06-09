import { useState, useCallback, useRef, useEffect } from "react";

function UseRefHook() {
    const [value, setValue] = useState("PSLV Rocket");
    const [count, setCount] = useState(0);

    var func = useCallback((orderdetails) => {
        //api call to post data or any other function for ${value}
        console.log(`Order Placed ${value}`);
        return value;
    }, [value])

    const initialFunc = useRef(func);

    useEffect(() => {
        if (initialFunc.current !== func) {
            console.log("Function gets changed");
            initialFunc.current();
            func();
        }
    },[func])

    const handleChange = (e) => {
        setValue((prev)=> e.target.value);
    }

    const handleUpdate = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <div>
            <h2>useRef hook</h2>
            <br />
            <label htmlFor="input"> Change Product Name: </label>
            <input id="input" onChange={handleChange} value={value} ></input>
            <h3>Function Result</h3>
            {value}
            <br />
            <p>Update Number: {count}</p>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default UseRefHook;