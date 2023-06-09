import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "Subscribed") {
        return {usertype: "subscribed"}
    }
    else if (action.type === "Unsubscribed") {
        return {usertype: "unsubscribed"}
    }
    else if (action.type === "New") {
        return {usertype: "general"}
    }
    throw Error('Unknown Action');
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, { usertype: "general" });

    function handleClick(e) {
        switch (e.target.id) {
            case "Subscribe":
                dispatch({type: "Subscribed"})
                break;
            case "Unsubscribe":
                dispatch({type: "Unsubscribed"})
                break;
            default:
                dispatch({type: "New"})
                break;
        }
    }

    return (
        <div>
            <h2>useReducer : A way to manage state</h2>
            <br />
            <h1>
                {state.usertype === "general"
                    ?
                    "Welcome! New User"
                    :
                    (state.usertype === "subscribed"
                        ? "Congratulations! You have successfully subscribed :)"
                        : "Welcome back! Please give a thought to subscribing again")}
            </h1>
            
            <button id="Subscribe" onClick={handleClick}> Subscribe </button>
            <button id="Unsubscribe" onClick={handleClick}> Unsubscribe </button>
            <button id="New" onClick={handleClick}> Make me a new user </button>
        </div>
    );
}
export default UseReducerHook;