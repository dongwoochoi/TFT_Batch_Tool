
import './App.css';
import Nav from './tool/nav/nav';
import List from './tool/list/list';
import Batch from './tool/batch/batch';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
        <div className="main_container">
          <div className="line1">
            
          </div>
          <div className="line2">
            <Batch></Batch>
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
