function Menu({editMode, setEditMode}) {
    return (
        <div className="menu">
        <div className="menu-item">
          <div className="text inline">Edit Mode:&nbsp;</div>
          <label className="switch">
            <input onClick={() => setEditMode(!editMode)} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="menu-item">
          <button className="print-btn">Download as PDF</button>
        </div>
      </div>
    )
}

export default Menu;
