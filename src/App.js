import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';
import './styles/App.css';

function App() {
  return (
    <div id="content">
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
