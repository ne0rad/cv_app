import Page from './components/Page';
import Menu from './components/Menu';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [editMode, setEditMode] = useState(true);
  return (
    <div id="content">
      <Menu
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Page
        editMode={editMode}
      />
    </div>
  );
}

export default App;
