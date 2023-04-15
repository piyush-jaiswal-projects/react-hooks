import '../App.css';
import { useState, useEffect } from 'react';

function UseStateHook() {
    const [data, setData] = useState({
        count: 0,
        id: 'X'
    });

    useEffect(() => { 
        if (data.count === 1) {
            setData((prev) => {
                return {
                    ...prev,
                    id: 'ONE'
                }
            });
        }
        else {
            setData((prev) => {
                return {
                    ...prev,
                    id: 'X'
                }
            });
        }
    }, [data.count]);

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
            <span>{data.id}</span>
        </div>
    );
}

export default UseStateHook;
