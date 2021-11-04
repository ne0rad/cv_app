import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import Page from './components/Page';
import Menu from './components/Menu';
import './styles/App.css';
import { useState } from 'react';


function App() {
  const [editMode, setEditMode] = useState(true);

  function savePDF() {
    window.print();
  }

  return (
    <PrintProvider>
      <div id="content">
        <NoPrint>
          <Menu
            editMode={editMode}
            setEditMode={setEditMode}
            savePDF={savePDF}
          />
        </NoPrint>
        <Print>
          <Page
            editMode={editMode}
          />
        </Print>
      </div>
    </PrintProvider>
  );
}

export default App;
