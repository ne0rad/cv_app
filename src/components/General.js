import { useState } from "react";

function General() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);

    function setInit() {
        setName('Radminas');
        setSurname('Usackas');
        setAge(31);
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Surname: {surname}</h1>
            <h1>Age: {age}</h1>
            <button onClick={() => setInit()}>Set Initial</button>
        </div>
    )
}

export default General;