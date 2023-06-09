
import './App.css';
import Nav from './tool/nav/nav';
import List from './tool/list/list';
import Batch from './tool/batch/batch';
import Synergy from './tool/synergy/synergy';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
        <div className="main_container">
          <div className="line1">
            <Synergy></Synergy>
          </div>
          <div className="line2">
            <Batch></Batch >
            <List></List>
          </div>
          <div className="line3">

          </div>
          
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
