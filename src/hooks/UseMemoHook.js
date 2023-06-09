import { useMemo, useState } from "react";

function UseMemoHook() {

    const [userInput, setUserInput] = useState({
        location: "Delhi",
        vaccancy: "Empty"
    })
    const [updatedValue, setUpdatedValue] = useState(0)


    function hotelData2(){
        console.log("Un-Memoized Function Call");
        //calling an API to get data
        return `Hotel Data 2 ${userInput.location}  and ${userInput.vaccancy}`;
    }
    
    const hotelData = useMemo(() => {
        console.log("Memoized Function Call");
        //calling an API to get data
        return `Hotel Data ${userInput.location}  and ${userInput.vaccancy}`;
    }, [userInput.location, userInput.vaccancy])


    const handleInputChange = (e) => {
        e.target.name === "Location"
            ?
            setUserInput({
                ...userInput,
                location: e.target.value
            })
            :
            setUserInput({
                ...userInput,
                vaccancy: e.target.value
            })
    }

    const handleUpdate = () => {
        setUpdatedValue((prev) => prev + 1);
    }

    return (
        <>
            <h2>useMemo Hook</h2>
            <br />

            <label htmlFor="location">
                Enter Location :   
            </label>
            <input
                type="text"
                name="Location"
                id="location"
                value={userInput.location}
                onChange={handleInputChange}
            />
            <br />

            <label htmlFor="location">
                Enter Vaccancy Status :   
            </label>
            <input
                type="text"
                name="Vaccancy"
                id="vaccancy"
                value={userInput.vaccancy}
                onChange={handleInputChange}
            />
            <br />

            <button onClick={handleUpdate}>
                <p>Update Function</p>
            </button>
            <p>Update {updatedValue}</p>

            <h3>Hotel Data</h3>
            {hotelData}

            <h3>Hotel Data 2</h3>
            {hotelData2()}
        </>
    );
}

export default UseMemoHook;