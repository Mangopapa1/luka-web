import { useState } from 'react';
import styled from 'styled-components';

function App() {
    const [value, setValue] = useState("");
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = e;
        setValue(value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("hello", value);

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                    value={value}
                    placeholder='username' onChange={onChange} />
                <button>Log in</button>
            </form>
        </div>
    )
}
export default App;
