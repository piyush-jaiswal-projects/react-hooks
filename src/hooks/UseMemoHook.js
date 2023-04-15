import { useMemo, useState} from "react";

function UseMemoHook() {

    const Case = "Constant";

    const handleChange = () => {
        for (let index = 0; index < 1000; index++) {
        }
        return "Memoization Not Done";
    }

    const handleChangeWithMemo = useMemo(() => {
        for (let index = 0; index < 1000; index++) {
        }
        return "Memoization Done";
    }, [Case]);

    return (
        <>
            <h2>useMemo Hook</h2>
            <br />
            <span>{handleChange()}</span>
            <span>{handleChangeWithMemo}</span>
            <br />
            <button onClick={handleChange}>
                Change Without Memo
            </button>

            <button onClick={handleChangeWithMemo}>
                Change with memo
            </button>
        </>
    );
}

export default UseMemoHook;