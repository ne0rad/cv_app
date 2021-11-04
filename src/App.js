import Page from './components/Page';
import './styles/App.css';
import './styles/switch.css';
import { useState } from 'react';

function App() {
  const [editMode, setEditMode] = useState(false);
  return (
    <div id="content">
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
      <Page editMode={editMode} />
    </div>
  );
}

export default App;
