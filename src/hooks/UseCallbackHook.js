import { useCallback, useState, useEffect } from "react";

function UseCallbackHook({orderdetails}) {
    const [value, setValue] = useState("PSLV Rocket");
    const [count, setCount] = useState(0);

    let func = useCallback((orderdetails) => {
        //api call to post data or any other function for ${value}
        console.log(`Order Placed ${value}`);
        return value;
    }, [value])

    useEffect(() => { console.log("Function Gets Changed"); }, [func]);

    const handleChange = (e) => setValue(e.target.value);
    
    return (
        <div className="App">
            <h2>useCallback</h2>
            <br />
            <label htmlFor="input"> Change Product Name: </label>
            <input id="input" onChange={handleChange} value={value} ></input>
            <h3>Function Result</h3>
            {value}
            <br />
            <p>Update Number: {count}</p>
            <button onClick={()=>{setCount((prev)=> prev+1)}}>Update</button>
        </div>
    );
}

export default UseCallbackHook;