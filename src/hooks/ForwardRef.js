import { useRef, forwardRef } from 'react';

// This example is referred from Official React Docs
// Create child component here or import it
const Child = forwardRef((props, ref) => {
    return <input placeholder={props.placeholder} ref={ref} />;
});

function ForwardRef() {
    const mainRef = useRef(null);

    function handleManipulation() {
        mainRef.current.setAttribute('type', 'password');
    }

    return (
        <div>
            <h2>Forward Ref: Manipulating Child Component From Parent</h2>
            <br />
            <Child placeholder="Enter Any Value..." ref={mainRef} />
            <br />
            {/* BUTTON OF PARENT TO MANIPULATE CHILD */}
            <button onClick={handleManipulation}>Convert Input type to Password</button>
        </div>
    );
}

export default ForwardRef;
