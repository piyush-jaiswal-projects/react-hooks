import '../App.css';
import { useState } from 'react';

function UseStateHook() {
    const [data, setData] = useState({
        count: 0,
        id: 'X'
    });

    const updateCount = (operator) => {
        operator === '+'
            ?
            setData((prev) => {
                return {
                    ...prev,
                    count: prev.count + 1
                }
            })
            :
            setData((prev) => {
                return {
                    ...prev,
                    count: prev.count - 1
                }
            });
        
    }

    return (
        <div className="App">
            <h2>Use State Hook</h2>
            <br />
            <button onClick={() => { updateCount('-') }}>-</button>
            <span>{data.count}</span>
            <button onClick={() => { updateCount('+') }}>+</button>
            <br />
            <h3>Explanation: </h3>
            <p>
                Whenever you click on + or - button, you are trying to update the state of the
                variable dynamically with the help of update function provided by useState hook.
                So whenever state changes, hook explicitly forces the updation of component by
                re-rendering.
            </p>
        </div>
    );
}

export default UseStateHook;
