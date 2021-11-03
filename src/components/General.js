import { useState } from "react";

function General() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);

    function setInit() {
        setName('Mister');
        setSurname('Bean');
        setAge(65);
    }

    return (
        <div>
            <div className="text">Name: {name}</div>
            <div className="text">Surname: {surname}</div>
            <div className="text">Age: {age}</div>
            <button onClick={() => setInit()} disabled={age > 0 ? true : false}>Set Initial</button>
        </div>
    )
}

export default General;