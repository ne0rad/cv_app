import '../styles/switch.css';

function Menu({ editMode, setEditMode, savePDF }) {
    return (
        <div className="menu">
            <div className="menu-item">
                <div className="text">Preview:&nbsp;</div>
                <label className="switch">
                    <input onChange={() => setEditMode(!editMode)}  type="checkbox" checked={editMode ? false : true}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="menu-item">
                <button className="print-btn" disabled={editMode} onClick={savePDF}>Download as PDF</button>
            </div>
        </div>
    )
}

export default Menu;
