import { useState } from "react";
import EducationItem from "./modules/EducationItem";

function Education({ editMode }) {

    const [items, setItems] = useState([]);
    const [key, setKey] = useState(1);

    function removeItem(id) {
        let tempItems = [...items];
        let index = false;
        for (let i = 0; i < tempItems.length; i++) {
            if (tempItems[i].id === id) {
                index = i
                break;
            }
        }
        if (index === false) return;
        tempItems.splice(index, 1);
        setItems(tempItems);
    }


    return (
        <div id="education">
            <div className="container title">
                <div className="text-title">
                    Education:
                </div>
            </div>
            {
                items.map((el) => {
                    return (
                        <EducationItem
                            editMode={editMode}
                            key={el.key}
                            id={el.id}
                            removeItem={removeItem}
                        />
                    )
                })
            }
            <button className="add-btn" hidden={editMode ? false : true} onClick={() => {
                setKey(key + 1);
                let tempItems = [...items];
                tempItems.push({ key: key, id: key });
                setItems(tempItems);
            }}>
                Add
            </button>
        </div>
    )
}

export default Education;