import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js'
import MainContent from './MainContent.js'
import Background from './Background.js'

function App() {
  return (
    <div className="App">
      <Background />
      <div className="content-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
