import { useState, useEffect } from 'react'

function UseEffectHook() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })

        //cleanup
        return () => {
            window.removeEventListener('resize', () => {
                setWidth(0);
            });
        }
    }, [])

    return (
        <>
            <h2>useEffect Hook</h2>
            <br />
            <p>
                Window Width:
                <span>
                    {width}
                </span>
            </p>
        </>
    );
}

export default UseEffectHook;