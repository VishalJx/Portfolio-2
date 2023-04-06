import './App.css';
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Structure from './main-page/Structure';

function App() {

  return(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Structure/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
